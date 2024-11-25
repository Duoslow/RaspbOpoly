# Generated by Django 3.2.5 on 2023-04-02 16:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, default=None, null=True)),
                ('money', models.IntegerField(blank=True, default=1500, null=True)),
                ('jail', models.BooleanField(blank=True, default=False, null=True)),
                ('mortage', models.BooleanField(blank=True, default=False, null=True)),
                ('insurance', models.BooleanField(blank=True, default=False, null=True)),
                ('bankrupt', models.BooleanField(blank=True, default=False, null=True)),
                ('bank_money', models.IntegerField(blank=True, default=0, null=True)),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='game.cards')),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, default=None, null=True)),
                ('waiting_for_players', models.BooleanField(blank=True, default=True, null=True)),
                ('actions', models.ManyToManyField(blank=True, to='game.Actions')),
                ('players', models.ManyToManyField(blank=True, to='game.Players')),
            ],
        ),
    ]
