from itertools import product
from django.db import models
from users.models import CustomUser
from products.models import Product

from uuid import uuid4


order_statuses = [
    ('M', 'made'),
    ('P', 'pending'),
    ('D', 'delivered'),
    ('C', 'canceled'),
]

payment_statuses = [
    ('S', 'successful'),
    ('P', 'pending'),
    ('F', 'failed'),
]

# Table to keep track of orders
class Order(models.Model):
    id = models.UUIDField(verbose_name='order id', primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    amount = models.IntegerField('amount bought', default=1)
    unit_price = models.DecimalField('unit price (ANG)', default=25000.00, max_digits=11, decimal_places=2)
    date = models.DateTimeField('order date', auto_now_add=True)
    status = models.CharField('order status', choices=order_statuses, max_length=1, default='M')

    @property
    def total_price(self):
        return self.amount * self.unit_price

# Table to keep track of payments
class Payment(models.Model):
    id = models.UUIDField(verbose_name='payment id', primary_key=True, default=uuid4, editable=False)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField('amount paid (ANG)', max_digits=11, decimal_places=2)
    status = models.CharField('order status', choices=payment_statuses, max_length=1, default='P')
