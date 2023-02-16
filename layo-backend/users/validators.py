from django.core.validators import RegexValidator


phone_regex = RegexValidator(regex=r'^\+?(234)?\d{9,15}$')
