from rest_framework import generics
from .models import College
from .serializers import CollegeSerializer
import django_filters.rest_framework
from rest_framework import filters


class CollegeList(generics.ListAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    filterset_fields = {
        'institute_name': ['contains'],
        'state': ['contains'],
        'city':  ['contains'],
        'branch': ['contains'],
        'fees': ['exact', 'gte', 'lte'],
        'rank': ['exact', 'gte', 'lte'],
        'percentile': ['exact', 'gte', 'lte'],
        'avg_percentile': ['exact', 'gte', 'lte'],
        'rating': ['exact', 'gte', 'lte'],
        'facilities':  ['contains'], }

    filter_backends = [
        django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['$institute_name', '$state', '$city', '$branch', '$fees',
                     '$rank', '$percentile', '$avg_percentile', '$rating', '$facilities']
    ordering_fields = ['fees', 'rank',
                       'percentile', 'avg_percentile', 'rating']

    def get_queryset(self):
        print('here')

        return super().get_queryset()
