from django.urls import path, include
from replies import views

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('', views.user_replies),
    path('all/', views.get_all_replies),

]