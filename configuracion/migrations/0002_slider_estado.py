# Generated by Django 5.0.3 on 2024-04-02 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configuracion', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='slider',
            name='estado',
            field=models.BooleanField(default=True),
        ),
    ]