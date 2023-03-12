from django.db import models
from users.models import PartnerAccount

category = [('F', 'fabric'), ('C', 'custom'), ('O', 'other')]
rating = [(1, 'very poor'), (2, 'poor'), (3, 'average'), (4, 'good'), (5, 'very good')]

# Path to store tag images
def tag_image_path(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
# A sample table of different product tags
class Tag(models.Model):
    name = models.CharField('tag name', max_length=50)
    category = models.CharField(choices=category, max_length=1, null=False)
    image = models.ImageField(upload_to=tag_image_path, null=True)

    def __str__(self):
        return self.name + ' (' + str(self.id) + ') ' + '(' + str(self.category) + ') ' 

# Path to store tag images
def color_image_path(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
# A sample table of different product tags
class Color(models.Model):
    name = models.CharField('color name', max_length=50, unique=True)
    image = models.ImageField(upload_to=color_image_path, null=True)

    def __str__(self):
        return self.name

# Path to store product images
def product_image_path(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
def product_image_path2(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
def product_image_path3(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
def product_image_path4(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
def product_image_path5(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
# A sample of what a procuct table may be
class Product(models.Model):    
    partner = models.ForeignKey(PartnerAccount, on_delete=models.CASCADE)    
    name = models.CharField('product name', max_length=100, unique=True)
    description = models.TextField('description', null=False)
    tags = models.ManyToManyField(Tag, verbose_name='tags', blank=False)
    colors = models.ManyToManyField(Color, verbose_name='colors', blank=True)
    regular_price = models.DecimalField('Regular price (NGR)', default=25000.00, max_digits=10, decimal_places=2)
    sale_price = models.DecimalField('Sale price (NGR)', default=25000.00, max_digits=10, decimal_places=2)
    weight = models.DecimalField('Weight (kg)', default=25.00, max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=product_image_path, null=False)
    image2 = models.ImageField(upload_to=product_image_path2, null=False)
    image3 = models.ImageField(upload_to=product_image_path3, null=False)
    image4 = models.ImageField(upload_to=product_image_path4, null=False)
    image5 = models.ImageField(upload_to=product_image_path5, null=False)
    inventory = models.IntegerField(default=1000)
    rating = models.IntegerField(choices=rating, default=3)
    date = models.DateTimeField('last updatee', auto_now=True)

    class Meta:
        verbose_name = "Product"

    def __str__(self):
        return self.name

# A combo contains two products, usually a fabric and a custom made wear
class Combo(models.Model):
    item1 = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="fabric_item")
    item2 = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="custom_item")


    # upsells: general
    # crosssells: cart