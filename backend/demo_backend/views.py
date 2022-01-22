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
        points = request.data['points']
        image = request.data['image']
        Annotator.objects.create(
            filename=filename,
            points=points,
            image=image
            )
        return HttpResponse({'message': 'Annotation created'}, status=200)
