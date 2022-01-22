from turtle import width
from django.db import models


def upload_path(instance, filename):
    return '/'.join(["images", str(instance.filename), filename])

# Create your models here.


class Annotator(models.Model):
    filename = models.CharField(max_length=120)

    height = models.TextField(blank=True, null=True)
    width = models.TextField(blank=True, null=True)
    x = models.TextField(blank=True, null=True)
    y = models.TextField(blank=True, null=True)

    image = models.ImageField(blank=True, null=True, upload_to=upload_path)

    def _str_(self):
        return self.title
