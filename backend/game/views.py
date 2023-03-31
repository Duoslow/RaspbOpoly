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
# with open('gameplay/luck_actions.json', 'r', encoding='utf-8') as f:
#     luck_actions = json.load(f)
# completed_actions = []


@api_view(['POST'])
@permission_classes([AllowAny])
def send_card(request):
    if request.method == 'POST':
        data = request.data
        card_id = data['card_id']
        print(card_id)
        if LuckyCard.objects.filter(card_id=card_id).exists():
            card = LuckyCard.objects.get(card_id=card_id)
            # print card all data
            print(card.id)
            print(card.card_id)
            print(card.name_tr)
            print(card.name_en)
            print(card.type)
            print(card.action)
            print(card.action_value)
        return Response(status=status.HTTP_200_OK)
    
