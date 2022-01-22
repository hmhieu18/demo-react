from rest_framework import serializers
from .models import Annotator

class AnnotatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annotator
        fields = ('id', 'filename', 'width', 'height', 'x', 'y', 'image')