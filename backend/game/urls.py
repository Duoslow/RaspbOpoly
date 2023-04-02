from django.urls import path
from .views import *

urlpatterns = [
    path('send_card/', send_card),
    # path('get_cards/', get_cards),
    path('get_players/', get_players),
    # path('get_actions/', get_actions),
    # path('get_game/', get_game),
    path('create_new_game/', create_new_game),
    path('start_game/', start_game),

]