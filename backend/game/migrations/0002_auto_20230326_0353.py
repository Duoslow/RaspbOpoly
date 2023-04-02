# Generated by Django 3.2.5 on 2023-03-26 00:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('name', models.TextField(default=None, null=True, verbose_name='Oyun Adı')),
                ('date', models.DateTimeField(auto_now=True, verbose_name='Oyun Tarihi')),
            ],
        ),
        migrations.RemoveField(
            model_name='propertyowner',
            name='is_owned',
        ),
        migrations.RemoveField(
            model_name='propertyowner',
            name='player_id',
        ),
        migrations.RemoveField(
            model_name='propertyowner',
            name='property_id',
        ),
        migrations.AddField(
            model_name='propertyowner',
            name='owner',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='game.player', verbose_name='Emlak Sahibi'),
        ),
        migrations.AddField(
            model_name='propertyowner',
            name='property',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='game.property', verbose_name='Emlak'),
        ),
    ]