from django.db import models
import datetime

class Todo(models.Model):

    name =  models.CharField(max_length=150 )
    createdAt = models.DateTimeField( auto_now_add = True , null = True , blank=True )
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
    
    def getdesc(self):
        return self.description[:50] +'...'
    

class TodoItems(models.Model):
    #create fields at the sub todos with datatypes
    #all data Types should be have options that we can add as we want the field to behave
    #options will change according to each data type

    name = models.CharField(max_length=150 , null=True , blank = True )

    createAt = models.DateTimeField(auto_now_add = True )
    Description = models.TextField(null = True , blank=True)
    iscompleted = models.BooleanField(default=False )

    # while creating the ForeignKey we should set for the what will happen for the child oif the parent is deleted
    #cascade will delete the child if the parent is deleted 
    todo = models.ForeignKey(Todo , on_delete=models.CASCADE  , null = True)

    #this will return its name
    def __str__(self):
        return self.name 