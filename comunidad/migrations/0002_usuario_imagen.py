# Generated by Django 5.0.3 on 2024-04-04 17:46

import comunidad.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comunidad', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='imagen',
            field=models.ImageField(blank=True, default='comunidad\\def-user.png', null=True, upload_to=comunidad.models.get_image_filename),
        ),
    ]
