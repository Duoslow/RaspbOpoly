from django.db import models
import random
# Create your models here.
colors = ['red', 'blue', 'green', 'yellow', 'black']

class Cards(models.Model):
    card_id = models.TextField(default=None, null=True, blank=True)
    card_name = models.TextField(default=None, null=True, blank=True)
    card_type = models.TextField(default=None, null=True, blank=True)
    card_action = models.TextField(default=None, null=True, blank=True)
    card_value = models.TextField(default=None, null=True, blank=True)
    card_color = models.TextField(default=None, null=True, blank=True)
    def __str__(self):
        return self.card_id

class Actions(models.Model):
    card = models.ForeignKey(Cards, on_delete=models.CASCADE)
    def __str__(self):
        return self.card.card_id
    
def random_color():
    return random.choice(colors)
class Players(models.Model):
    name = models.TextField(default=None, null=True, blank=True)
    card = models.OneToOneField(Cards, on_delete=models.CASCADE)
    color = models.TextField(default=random_color, null=True, blank=True)
    money = models.IntegerField(default=1500, null=True, blank=True)
    jail = models.BooleanField(default=False, null=True, blank=True)
    mortage = models.BooleanField(default=False, null=True, blank=True)
    insurance = models.BooleanField(default=False, null=True, blank=True)
    bankrupt = models.BooleanField(default=False, null=True, blank=True)
    bank_money = models.IntegerField(default=0, null=True, blank=True)
    def __str__(self):
        return self.name
    
class Game(models.Model):
    name = models.TextField(default=None, null=True, blank=True)
    waiting_for_players = models.BooleanField(default=True, null=True, blank=True)
    players = models.ManyToManyField(Players, blank=True)
    actions = models.ManyToManyField(Actions, blank=True)
    def __str__(self):
        return str(self.id)
