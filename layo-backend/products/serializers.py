from rest_framework import serializers

from .models import Product, Tag, Color, Combo


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
            'image2',
            'image3',
            'image4',
            'image5',
            'inventory',
            'rating',
            'date',
        ]

class ProductListSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True, read_only=True)
    colors = serializers.StringRelatedField(many=True, read_only=True)
    business_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'business_name',
            'name',
            'description',
            'tags',
            'colors',
            'regular_price',
            'sale_price',
            'weight',
            'image',
            'image2',
            'image3',
            'image4',
            'image5',
            'inventory',
            'rating',
            'date',
        ]

    def get_business_name(self, obj):
            return obj.partner.business_name
        

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

class ComboSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Combo
        fields = '__all__'

class ComboListSerializer(serializers.ModelSerializer):
    item1_ = serializers.SerializerMethodField(read_only=True)
    item2_ = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model =  Combo
        fields = [
            'item1_',
            'item2_'
        ]

    def get_item1_(self, obj):
            return obj.item1.name

    def get_item2_(self, obj):
            return obj.item2.name