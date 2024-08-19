from django.shortcuts import render
from rest_framework import viewsets
from .models import Note
from . import serializers
from rest_framework.decorators import action
from rest_framework.response import Response



class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = serializers.NoteSerializer

    @action(detail=False, methods=['get'])
    def count(self, request):
        notes = self.get_queryset()
        note_count = notes.count()
        serializer = self.get_serializer(notes, many=True)

        return Response({
            'note_count': note_count,
            'notes': serializer.data
        })
