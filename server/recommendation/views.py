from rest_framework import generics
from .models import College
from .serializers import CollegeSerializer
import django_filters.rest_framework
from rest_framework import filters
from django.shortcuts import get_object_or_404


class CollegeDetail(generics.RetrieveAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer


class CollegeList(generics.ListAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    filterset_fields = {
        'fees': ['exact', 'gte', 'lte'],
        'rank': ['exact', 'gte', 'lte'],
        'percentile': ['exact', 'gte', 'lte'],
        'avg_percentile': ['exact', 'gte', 'lte'],
        'rating': ['exact', 'gte', 'lte'],
        'institute_name': ['contains'],
        'state': ['contains'],
        'city': ['contains'],
        'branch': ['contains'],
    }

    filter_backends = [
        django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['$institute_name', '$state',
                     '$city', '$branch', '$facilities']
    ordering_fields = ['fees', 'rank',
                       'percentile', 'avg_percentile', 'rating', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8', 'w9']
