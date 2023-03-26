# Generated by Django 3.2.5 on 2023-03-26 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LuckyCard',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('name_tr', models.TextField(default=None, null=True, verbose_name='Kart Adı')),
                ('name_en', models.TextField(default=None, null=True, verbose_name='Card Name')),
                ('type', models.TextField(default=None, null=True, verbose_name='Kart Tipi')),
                ('action', models.TextField(default=None, null=True, verbose_name='Kart Eylemi')),
                ('action_value', models.IntegerField(default=None, null=True, verbose_name='Kart Eylemi Değeri')),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('card_id', models.TextField(default=None, null=True, unique=True, verbose_name='Kart ID')),
                ('name', models.TextField(default=None, null=True, verbose_name='Oyuncu Adı')),
                ('pawn', models.TextField(default=None, null=True, verbose_name='Oyuncu Taşı')),
                ('money', models.IntegerField(default=None, null=True, verbose_name='Oyuncu Para')),
                ('position', models.IntegerField(default=None, null=True, verbose_name='Oyuncu Pozisyon')),
                ('is_bankrupt', models.BooleanField(default=False, null=True, verbose_name='Oyuncu Bankrupt')),
                ('is_in_jail', models.BooleanField(default=False, null=True, verbose_name='Oyuncu Hapiste')),
                ('jail_count', models.IntegerField(default=None, null=True, verbose_name='Oyuncu Hapiste Kalma Sayısı')),
                ('is_in_game', models.BooleanField(default=False, null=True, verbose_name='Oyuncu Oyunda')),
                ('is_turn', models.BooleanField(default=False, null=True, verbose_name='Oyuncu Sırası')),
            ],
        ),
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('name_tr', models.TextField(default=None, null=True, verbose_name='Emlak Adı')),
                ('name_en', models.TextField(default=None, null=True, verbose_name='Property Name')),
                ('price', models.IntegerField(default=None, null=True, verbose_name='Emlak Fiyatı')),
                ('rent', models.IntegerField(default=None, null=True, verbose_name='Kiracılık Ücreti')),
                ('rent_1', models.IntegerField(default=None, null=True, verbose_name='Kiracılık Ücreti 1')),
                ('rent_2', models.IntegerField(default=None, null=True, verbose_name='Kiracılık Ücreti 2')),
                ('rent_3', models.IntegerField(default=None, null=True, verbose_name='Kiracılık Ücreti 3')),
                ('group', models.TextField(default=None, null=True, verbose_name='Emlak Grubu')),
                ('color', models.TextField(default=None, null=True, verbose_name='Emlak Rengi')),
            ],
        ),
        migrations.CreateModel(
            name='PropertyOwner',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('property_id', models.IntegerField(default=None, null=True, verbose_name='Emlak ID')),
                ('player_id', models.IntegerField(default=None, null=True, verbose_name='Oyuncu ID')),
                ('is_mortgaged', models.BooleanField(default=False, null=True, verbose_name='Emlak Hipote')),
                ('is_owned', models.BooleanField(default=False, null=True, verbose_name='Emlak Sahibi')),
            ],
        ),
    ]
