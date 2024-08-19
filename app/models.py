from django.db import models

# Create your models here.

class Note (models.Model):
    title = models.CharField(max_length=200, default="My Note", blank=True, null=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[:6]