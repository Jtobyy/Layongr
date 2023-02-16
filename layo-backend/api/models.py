from django.db import models


class APIS(models.Model):
    name = models.CharField('API name', max_length=255)
    description = models.TextField('API description')
    app = models.CharField('Under what app', max_length=255)
    path = models.CharField('Path', max_length=300)

