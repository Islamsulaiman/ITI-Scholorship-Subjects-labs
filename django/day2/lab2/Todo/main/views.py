from django.shortcuts import render , redirect
from django.http import HttpResponse
from .models import Todo , TodoItems
from .forms import TodoForm
# Create your views here.
#FUNCTION BASED VIEW --- CLASS BASED VIEW (Blackbox)

def home(request):  
    todos = Todo.objects.all()
    message ="""  
        hola from django ^_^
    """
    context = {
        "todos" :todos,
    }
    return  render(request , 'home.html' , context)


def detailed(request , id):
    todo = Todo.objects.get(id = id)
    items = todo.todoitems_set.all()
    context={
        "todo": todo,
        "items" :items
    }
    return render(request , 'detaild.html' , context)




def createTodo(request):
    form = TodoForm()
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    context = {
        "form": form
    }
    return render(request , 'create.html' , context)



def updateTodo(request , pk):
    todo = Todo.objects.get(id= pk)
    form = TodoForm(instance=todo)
    if request.method == "POST":
        form = TodoForm(request.POST , instance=todo)
        if form.is_valid():
            form.save()
            return redirect('/')
    context = {
        "form": form
    }
    return render(request , 'update.html' , context)



def delete(request , pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return redirect('/')