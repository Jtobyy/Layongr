from rest_framework import generics

from api.permissions import IsStaffEditorPermission
from .serializers import ProductSerializer, TagSerializer
from .models import Product, Tag


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
        get_tag = self.request.query_params.get('tags')
        category = self.request.query_params.get('cats')
        if category is not None:
            tags_set = list(Tag.objects.filter(category__in = category).values_list('id', flat=True))
            tags_set = [str(tag) for tag in tags_set]
        else:
            tags_set = Tag.objects.filter(category = 'C')
            tags_set = [str(tag) for tag in tags_set]
        if get_tag is not None:
            tags = get_tag.split(',')
            use_tags = []
            for tag in tags_set:    
                if tag in tags and tag in tags_set:
                    use_tags.append(tag)
            
            # checks
            print("tags =", tags)
            print("tags_set =", tags_set)

            queryset = queryset.filter(tags__in = use_tags)
        else:
            queryset = queryset.filter(tags__in = tags_set)
        return queryset
    serializer_class = ProductSerializer

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
        else:
            queryset = queryset.filter(category = 'C')
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