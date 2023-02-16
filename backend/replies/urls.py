from django.urls import path, include
from replies import views

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', views.replies_table), 

]