from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    count = serializers.SerializerMethodField()
    class Meta:
        model = Note
        fields = '__all__'

    
    def get_count(self, obj):
        return Note.objects.count()