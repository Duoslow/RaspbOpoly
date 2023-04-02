from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Cards)
admin.site.register(Actions)
admin.site.register(Players)
admin.site.register(Game)