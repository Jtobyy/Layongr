from rest_framework import serializers, permissions

from .models import Product, Tag


class ProductSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'partner',
            'name',
            'description',
            'tags',
            'regular_price',
            'sale_price',
            'weight',
            'image',
            'inventory',
            'date',
        ]

class TagSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tag
        fields = [
            'id',
            'name',
            'category',
            'image',
        ]

    def get_id(self, obj):
            return obj.id        

