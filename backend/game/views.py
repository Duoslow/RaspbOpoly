import io
from django.shortcuts import render
import orjson
import json
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse, FileResponse
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAdminUser
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core.files.storage import default_storage
from django.views.decorators.gzip import gzip_page
import importlib.util , os
from datetime import datetime
from django.utils import timezone
import pytz
import numpy as np
import pandas as pd
import pathlib
import xlsxwriter
import re
from sqlalchemy import create_engine
from .models import *
# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def send_card(request):
    if request.method == 'POST':
        data = request.data
        card_id = data['card_id']
        print(card_id)
        card = Cards.objects.get(card_id=card_id)
        game = Game.objects.get()
        if card.card_type == 'player' and game.waiting_for_players:
            print('waiting for players')
            player_exists = Players.objects.filter(card=card).exists()
            if player_exists:
                print('player exists')
                return JsonResponse({'status':'player_exists','player': player_exists})
            Players.objects.create(card=card,name=card.card_name)
            return Response(status=status.HTTP_200_OK)
        elif card.card_type == 'action':
            Actions.objects.create(card=card,)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_200_OK)
    
@api_view(['GET'])
@permission_classes([AllowAny])
def get_players(request):
    if request.method == 'GET':
        players = Players.objects.all()
        print(players)
        return JsonResponse({'players': list(players.values())})

@api_view(['POST'])
@permission_classes([AllowAny])
def create_new_game(request):
    if request.method == 'POST':
        data = request.data
        Players.objects.all().delete()
        Actions.objects.all().delete()
        Game.objects.all().delete()
        game = Game.objects.create()
        return Response(status=status.HTTP_200_OK)
    
@api_view(['POST'])
@permission_classes([AllowAny])
def start_game(request):
    if request.method == 'POST':
        data = request.data
        players = Players.objects.all()
        game = Game.objects.get()
        game.waiting_for_players = False
        game.players.set(players)
        game.save()
        return Response(status=status.HTTP_200_OK)