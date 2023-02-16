from dataclasses import field
from pyexpat import model
from rest_framework import serializers

from .models import APIS


class APISSerializer(serializers.ModelSerializer):
    class Meta:
        model = APIS
        fields = '__all__'
