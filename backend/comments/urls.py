from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.add_comment),
    path('video/<str:video_id>/', views.get_comments_for_video),
    path('<int:comment_id>/', views.update_comment),
    path('<int:comment_id>/replies/', include('replies.urls')),
]
