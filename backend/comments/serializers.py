from rest_framework import serializers
from .models import Comment

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['username', 'video_id', 'text', 'likes', 'dislikes','id']
        depth = 1

    username= serializers.SerializerMethodField()
    def get_username(self,comment):
        return comment.user.username
