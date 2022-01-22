from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AnnotatorSerializer
from .models import Annotator

# Create your views here.


class AnnotatorView(viewsets.ModelViewSet):
    serializer_class = AnnotatorSerializer
    queryset = Annotator.objects.all()

    def post(self, request, *arg, **kwargs):
        filename = request.data['filename']
        width = request.data['width']
        height = request.data['height']
        x = request.data['x']
        y = request.data['y']

        image = request.data['image']
        Annotator.objects.create(
            filename=filename,
            width=width,
            height=height,
            x=x,
            y=y,
            image=image
        )
        return HttpResponse({'message': 'Annotation created'}, status=200)
