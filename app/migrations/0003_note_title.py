# Generated by Django 5.1 on 2024-08-19 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_rename_notes_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='title',
            field=models.CharField(blank=True, default='My Note', max_length=200, null=True),
        ),
    ]
