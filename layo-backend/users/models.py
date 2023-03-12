from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

from .validators import phone_regex


BANK = [
    (0, 'Access Bank'),
    (1, 'UBA Bank'),
    (2, 'Zenith Bank'),
]
ENTITY = [
    ('S', 'Sole Proprietorship'),
    ('P', 'Partnership'),
    ('C', 'Corporation'),
]
GENDER = [
    ('M', 'Male'), 
    ('F', 'Female')
]

# Path to store user images
def user_directory_path(instance, filename): 
    return 'user_{0}/{1}'.format(instance.id, filename) 
# Custom User model
class CustomUser(AbstractUser):
    email = models.EmailField(_("email address"), blank=False)    
    phone_number = models.CharField(validators=[phone_regex], max_length=20, blank=True)    
    address = models.CharField(_('address'), max_length=255)
    city = models.CharField(_('city'), max_length=85)
    state = models.CharField(_('state'), max_length=85)
    country = models.CharField(_('country'), max_length=150)
    date = models.DateTimeField(_('registration date'), auto_now_add=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, null=True)

def id_image_path(instance, filename):
    return f'ID_{instance.business_name}/business_id/images/{filename}'
class PartnerAccount(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, null=False)    
    # Business Information    
    business_entity = models.CharField(choices=ENTITY, max_length=1, default='S')
    business_name = models.CharField(null=False, max_length=225, unique=True)
 
    # Seller/Tailor Profile
    brand_name = models.CharField(null=False, max_length=255, unique=True)
    legal_rep_first_name = models.CharField(null=False, max_length=225)
    legal_rep_other_name = models.CharField(null=True, max_length=225, default=None)
    legal_rep_last_name = models.CharField(null=False, max_length=225)
    valid_id_card = models.ImageField(upload_to = id_image_path)
    tin = models.CharField(max_length=25)
    vat = models.CharField(max_length=25)

    # Bank Details
    bank = models.IntegerField(choices=BANK, default=0)
    account_number = models.CharField(max_length=25)
    account_name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.brand_name


class CustomerAccount(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, null=False)

    first_name = models.CharField(null=False, max_length=225)
    other_name = models.CharField(null=True, max_length=225, default=None)
    last_name = models.CharField(null=False, max_length=225)

    gender = models.CharField(choices=GENDER, default='F', max_length=1)

    # Bank Details
    bank = models.IntegerField(choices=BANK, default=0)
    account_number = models.CharField(max_length=25)
    account_name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.first_name + self.last_name + '(' + self.gender + ')'
