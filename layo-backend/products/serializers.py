from rest_framework import serializers

from .models import Product, Tag, Color


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'partner',
            'name',
            'description',
            'tags',
            'colors',
            'regular_price',
            'sale_price',
            'weight',
            'image',
            'inventory',
            'rating',
            'date',
        ]

class ProductListSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True, read_only=True)
    colors = serializers.StringRelatedField(many=True, read_only=True)
    # ratingDisplay = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'partner',
            'name',
            'description',
            'tags',
            'colors',
            'regular_price',
            'sale_price',
            'weight',
            'image',
            'inventory',
            'rating',
            'date',
        ]

    # def get_rating(self, obj):
    #         return obj.get_rating_display()
        

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

class ColorSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Color
        fields = [
            'id',
            'name',
            'image',
        ]

    def get_id(self, obj):
            return obj.id        
