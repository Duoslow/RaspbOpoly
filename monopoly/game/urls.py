from .views import *
from django.urls import path

urlpatterns = [
    path('send_card/', send_card),
]