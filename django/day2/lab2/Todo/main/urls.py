from django.urls import path
from . import views
urlpatterns = [
    path('' ,views.home , name ='home' ),
    path('detailed/<str:id>' ,views.detailed , name = 'detailed' ),


#Some routes will take parameters arguments to specify each todo

    path('create/' ,views.createTodo , name = 'create' ),
    path('update/<str:pk>' ,views.updateTodo , name = 'update' ),
    path('delete/<str:pk>' ,views.delete , name = 'delete' ),

]
