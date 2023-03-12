from rest_framework import generics

from api.permissions import IsStaffEditorPermission
from .serializers import ProductSerializer, TagSerializer, ProductListSerializer, ColorSerializer, ComboSerializer, ComboListSerializer
from .models import Product, Tag, Color, Combo

from django.db.models import Q


# Product Views
class ProductListAPIView(generics.ListAPIView):
    """
    This endpoint returns a list of all **products** in the system.

    Fields
    id:     The product's unique identifier
    name: The name of the product
    description: A short description of the product
    tags: Product tags e.g electronics, cars etc
    regular_price: The standard product price
    sale_price: The current sale price
    weight: The products weight
    image: A sample image of the product
    inventory: Amount of a product left in store
    date: Last time product was updated
    """    
    def get_queryset(self):
        queryset = Product.objects.all()
        
        # Filter by categories
        category = self.request.query_params.get('cats')

        # get all tags in a particular category
        if category is not None:
            tags_set = list(Tag.objects.filter(category__in = category).values_list('id', flat=True))
            # convert the ids to strings for easy processing
            tags_set = [str(tag) for tag in tags_set]
        else:
            tags_set = Tag.objects.all().values_list('id', flat=True)
            tags_set = [str(tag) for tag in tags_set]


        # Filter by tags        
        get_tag = self.request.query_params.get('tags')
    
        if get_tag is not None:
            tags = get_tag.split(',')
            
            # makes sure the tag to get is in the category, not necessary atm since tags are queried by their unique ids
            use_tags = []            
            for tag in tags_set:
                if tag in tags and tag in tags_set:
                    use_tags.append(tag)
            
            # checks
            # print("tags =", tags)
            # print("tags_set =", tags_set)
            queryset = queryset.filter(tags__in = use_tags)
        else:
            queryset = queryset.filter(tags__in = tags_set)


        # Filter by prices
        price = None; min_price = None; max_price = None; actual_price = None

        try:
            # get the type of price filtering to use
            price = self.request.query_params.get('price')
            price_list = price.split(',')

            if len(price_list) == 1:
                actual_price = float(price_list[0])
            elif price_list[0] == 'gt':
                min_price = float(price_list[1])
            elif price_list[0] == 'lt':
                max_price = float(price_list[1])
            elif len(price_list) == 2:
                min_price = float(price_list[0])    
                max_price = float(price_list[1])
        except Exception as e:
            print(e)
            pass

        if actual_price is not None:
            lower_range = actual_price - 100
            higher_range = actual_price + 100
            queryset = queryset.filter(Q(sale_price__gte=lower_range), Q(sale_price__lte=higher_range))

        elif min_price is not None and max_price is not None:
            queryset = queryset.filter(Q(sale_price__gte=min_price), Q(sale_price__lte=max_price))
            
        elif min_price is not None:
            queryset = queryset.filter(Q(sale_price__gte=min_price))

        elif max_price is not None:
            queryset = queryset.filter(Q(sale_price__lte=max_price))
            

        # Filter by colors
        colors = self.request.query_params.get('colors')
        if colors is not None:
            color_list = colors.split(',')
            # db_colors = Color.objects.all().values_list('name', flat=True)
            
            queryset = queryset.filter(colors__name__in = color_list)

        # Filter by store
        store = self.request.query_params.get('store')
        if store is not None:
            queryset = queryset.filter(partner__business_name=store)
        return queryset
    serializer_class = ProductListSerializer

    # permission_classes = [IsStaffEditorPermission]

product_list_view = ProductListAPIView.as_view()

# Product Views
class ProductCreateAPIView(generics.CreateAPIView):
    """
    This endpoint allows **new products** to be added.

    Only staff users have access to this endpoint.

    Fields
    id: The product's unique identifier
    name: The name of the product
    description: A short description of the product
    tags: Product tags e.g electronics, cars etc
    regular_price: The standard product price
    sale_price: The current sale price
    weight: The products weight
    image: A sample image of the product
    inventory: Amount of a product left in store
    date: Last time product was updated
    """    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    permission_classes = [IsStaffEditorPermission]

product_create_view = ProductCreateAPIView.as_view()


class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    This endpoint returns the detail of a particular product and also allows products to be edited and deleted.

    Only staff users have access to this endpoint.

    Fields
    id:     The product's unique identifier
    name: The name of the product
    description: A short description of the product
    tags: Product tags e.g electronics, cars etc
    regular_price: The standard product price
    sale_price: The current sale price
    weight: The products weight
    image: A sample image of the product
    inventory: Amount of a product left in store
    date: Last time product was updated
    """    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    permission_classes = [IsStaffEditorPermission]    

product_retrieve_update_destroy_view = ProductRetrieveUpdateDestroyView.as_view()


# Tag Views
class TagListAPIView(generics.ListAPIView):
    """
    This endpoint returns a list of all **tags** in the system.

    Fields
    id:     The tag's unique identifier
    name: The name or category of the tag
    image: A sample image of the tag
    """        
    serializer_class = TagSerializer

    def get_queryset(self):
        # Categories of tags to query for
        queryset = Tag.objects.all()
        get_cat = self.request.query_params.get('cat')

        if get_cat is not None:
            queryset = queryset.filter(category = get_cat)
        # else:
        #     queryset = queryset.filter(category = 'C')
        return queryset

    # permission_classes = [IsStaffEditorPermission]    

tag_list_view = TagListAPIView.as_view()

class TagCreateAPIView(generics.CreateAPIView):
    """
    This endpoint allows new tags to be added.

    Only staff users have access to this endpoint.

    Fields
    id:     The tag's unique identifier
    name: The name or category of the tag
    image: A sample image of the tag
    """        
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    permission_classes = [IsStaffEditorPermission]    

tag_create_view = TagCreateAPIView.as_view()


class TagRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    This endpoint returns the detail of a tag and also allows tags to be edited and deleted.

    Only staff users have access to this endpoint.

    Fields
    id:     The tag's unique identifier
    name: The name or category of the tag
    image: A sample image of the tag
    """        
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    permission_classes = [IsStaffEditorPermission]    

tag_retrieve_update_destroy_view = TagRetrieveUpdateDestroyView.as_view()



# Color Views
class ColorListAPIView(generics.ListAPIView):
    """
    This endpoint returns the list of all **colors** in the system.

    Fields
    id:     The color's unique identifier
    name: The name of the color
    image: A sample image of the color
    """        
    serializer_class = ColorSerializer
    queryset = Color.objects.all()

color_list_view = ColorListAPIView.as_view()

class ColorCreateAPIView(generics.CreateAPIView):
    """
    This endpoint allows new Colors to be added.

    Only staff users have access to this endpoint.

    Fields
    id:     The Color's unique identifier
    name: The name or category of the Color
    image: A sample image of the Color
    """        
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

    permission_classes = [IsStaffEditorPermission]    

color_create_view = ColorCreateAPIView.as_view()


class ColorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    This endpoint returns the detail of a Color and also allows Colors to be edited and deleted.

    Only staff users have access to this endpoint.

    Fields
    id:     The Color's unique identifier
    name: The name or category of the Color
    image: A sample image of the Color
    """        
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

    permission_classes = [IsStaffEditorPermission]    

color_retrieve_update_destroy_view = ColorRetrieveUpdateDestroyView.as_view()




# Combo Views
class ComboListAPIView(generics.ListAPIView):
    """
    This endpoint returns the list of all **colors** in the system.

    Fields
    id:     The color's unique identifier
    name: The name of the color
    image: A sample image of the color
    """        
    serializer_class = ComboListSerializer

    def get_queryset(self):
        queryset = Combo.objects.all()    
        get_tags = self.request.query_params.get('tags')

        if get_tags is not None:
            tags = get_tags.split(',')
            if 'M' in tags:
                queryset.filter(item2__tags__in = ['male'])
            elif 'F' in tags:
                queryset.filter(item2__tags__in = ['female'])

        return queryset

combo_list_view = ComboListAPIView.as_view()


class ComboCreateAPIView(generics.CreateAPIView):
    """
    This endpoint allows new combos to be added.

    Only staff users have access to this endpoint.

    Fields
    id:     The combo's unique identifier
    name: The name or category of the combo
    image: A sample image of the combo
    """        
    queryset = Combo.objects.all()
    serializer_class = ComboSerializer

    permission_classes = [IsStaffEditorPermission]    

combo_create_view = ComboCreateAPIView.as_view()


class ComboRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    This endpoint returns the detail of a combo and also allows combos to be edited and deleted.

    Only staff users have access to this endpoint.

    Fields
    id:     The combo's unique identifier
    name: The name or category of the combo
    image: A sample image of the combo
    """        
    queryset = Combo.objects.all()
    serializer_class = ComboSerializer

    permission_classes = [IsStaffEditorPermission]    

combo_retrieve_update_destroy_view = ComboRetrieveUpdateDestroyView.as_view()
