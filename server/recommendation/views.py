from rest_framework import generics
from .models import College
from .serializers import CollegeSerializer
import django_filters.rest_framework


class CollegeList(generics.ListAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
