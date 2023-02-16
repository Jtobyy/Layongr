from django.db import models
from users.models import PartnerAccount

# Path to store tag images
def tag_image_path(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
# A sample table of different product tags
class Tag(models.Model):
    name = models.CharField('tag name', max_length=50)
    image = models.ImageField(upload_to=tag_image_path, null=True)

    def __str__(self):
        return self.name + ' (' + str(self.id) + ') '

# Path to store product images
def product_image_path(instance, filename): 
    return '{0}_images/{1}'.format(instance.name, filename)
# A sample of what a procuct table may be
class Product(models.Model):    
    partner = models.ForeignKey(PartnerAccount, on_delete=models.CASCADE)    
    name = models.CharField('product name', max_length=100, unique=True)
    description = models.TextField('description', null=True)
    tags = models.ManyToManyField(Tag, verbose_name='tags', blank=True)
    regular_price = models.DecimalField('Regular price (NGR)', default=25000.00, max_digits=10, decimal_places=2)
    sale_price = models.DecimalField('Sale price (NGR)', default=25000.00, max_digits=10, decimal_places=2)
    weight = models.DecimalField('Weight (kg)', default=25.00, max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=product_image_path, null=True)
    inventory = models.IntegerField(default=1000)
    date = models.DateTimeField('last updatee', auto_now=True)

    class Meta:
        verbose_name = "Product"

    def __str__(self):
        return self.name