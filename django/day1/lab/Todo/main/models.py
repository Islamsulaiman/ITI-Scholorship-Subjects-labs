from django.db import models

# Create your models here.
class Todo(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=300)
    isCompleted = models.BooleanField(default=False)


    def __str__(self):
        return self.name

    
    def getDescriptions(self):
        return self.description[:50]