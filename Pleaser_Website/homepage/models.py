from django.db import models
from django.contrib.auth.models import User

class Show(models.Model):
    location = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    venue = models.CharField(max_length=100)
    
    def __str__(self):
        return self.venue