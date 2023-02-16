from tabnanny import verbose
from rest_framework import serializers

from .models import Order, Payment


class OrderSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField(read_only=True)    
    user_name = serializers.SerializerMethodField(read_only=True)    
    product_name = serializers.SerializerMethodField(read_only=True)    
    
    class Meta:
        model = Order
        fields = [
            'id', 'user', 'user_name', 'product', 'product_name',
            'amount', 'unit_price', 'total_price', 'date', 'status'
        ]
    
    def get_total_price(self, obj):
        return obj.amount * obj.unit_price
    def get_user_name(self, obj):
        return obj.user.username
    def get_product_name(self, obj):
        return obj.product.name

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'