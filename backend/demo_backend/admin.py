from django.contrib import admin
from .models import Annotator

# Register your models here.

class AnnotatorAdmin(admin.ModelAdmin):
    list_display = ('filename', 'width', 'height', 'x', 'y', 'image')

admin.site.register(Annotator, AnnotatorAdmin)

