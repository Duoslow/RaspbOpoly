from django.db import models

# Create your models here.
class LuckyCard(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name_tr = models.TextField(verbose_name="Kart Adı", default=None, null=True)
    name_en = models.TextField(verbose_name="Card Name", default=None, null=True)
    type = models.TextField(verbose_name="Kart Tipi", default=None, null=True)
    action = models.TextField(verbose_name="Kart Eylemi", default=None, null=True)
    action_value = models.IntegerField(verbose_name="Kart Eylemi Değeri", default=None, null=True)

class Property(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name_tr = models.TextField(verbose_name="Emlak Adı", default=None, null=True)
    name_en = models.TextField(verbose_name="Property Name", default=None, null=True)
    price = models.IntegerField(verbose_name="Emlak Fiyatı", default=None, null=True)
    rent = models.IntegerField(verbose_name="Kiracılık Ücreti", default=None, null=True)
    rent_1 = models.IntegerField(verbose_name="Kiracılık Ücreti 1", default=None, null=True)
    rent_2 = models.IntegerField(verbose_name="Kiracılık Ücreti 2", default=None, null=True)
    rent_3 = models.IntegerField(verbose_name="Kiracılık Ücreti 3", default=None, null=True)
    group = models.TextField(verbose_name="Emlak Grubu", default=None, null=True)
    color = models.TextField(verbose_name="Emlak Rengi", default=None, null=True)

class Player(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    card_id = models.TextField(verbose_name="Kart ID", default=None, null=True, unique=True)
    name = models.TextField(verbose_name="Oyuncu Adı", default=None, null=True)
    pawn = models.TextField(verbose_name="Oyuncu Taşı", default=None, null=True)
    money = models.IntegerField(verbose_name="Oyuncu Para", default=None, null=True)
    position = models.IntegerField(verbose_name="Oyuncu Pozisyon", default=None, null=True)
    is_bankrupt = models.BooleanField(verbose_name="Oyuncu Bankrupt", default=False, null=True)
    is_in_jail = models.BooleanField(verbose_name="Oyuncu Hapiste", default=False, null=True)
    jail_count = models.IntegerField(verbose_name="Oyuncu Hapiste Kalma Sayısı", default=None, null=True)
    is_in_game = models.BooleanField(verbose_name="Oyuncu Oyunda", default=False, null=True)
    is_turn = models.BooleanField(verbose_name="Oyuncu Sırası", default=False, null=True)

class PropertyOwner(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    property = models.ForeignKey(Property, verbose_name="Emlak", default=None, null=True, on_delete=models.CASCADE)
    owner = models.ForeignKey(Player, verbose_name="Emlak Sahibi", default=None, null=True, on_delete=models.CASCADE)
    is_mortgaged = models.BooleanField(verbose_name="Emlak Hipote", default=False, null=True)

class Game(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.TextField(verbose_name="Oyun Adı", default=None, null=True)
    date = models.DateTimeField(verbose_name="Oyun Tarihi", auto_now=True)
    # players = models.ManyToManyField(Player, verbose_name="Oyuncular", default=None, null=True)
    # player_count = models.IntegerField(verbose_name="Oyuncu Sayısı", default=None, null=True)
    # is_started = models.BooleanField(verbose_name="Oyun Başladı", default=False, null=True)
    # is_finished = models.BooleanField(verbose_name="Oyun Bitti", default=False, null=True)
    # is_paused = models.BooleanField(verbose_name="Oyun Durdu", default=False, null=True)
    
