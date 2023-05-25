from django.shortcuts import render
from django.http import HttpResponse
from .models import Todo
# Create your views here.

def home(request):

    alltodos = Todo.objects.all()
    todos = Todo.objects.get()
    todosCount = Todo.objects.count()
    context = {
        "alltodos": alltodos,
        "todos" : todos,
        "todosCount" : todosCount
    }

    return render(request,'home.html',context)

    # return HttpResponse("hello")