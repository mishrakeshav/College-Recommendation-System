from rest_framework import generics
from .models import College
from .serializers import CollegeSerializer
import django_filters.rest_framework
from rest_framework import filters


class CollegeList(generics.ListAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    filterset_fields = ['institute_name', 'state', 'city', 'branch', 'fees', 'package', 'cet_marks', 'jee_marks',
                        'genders_accepted', 'campus_size', 'established_year', 'rating', 'university', 'facilities', 'college_type']
    filter_backends = [
        django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['$institute_name', '$state', '$city', '$branch', '$fees', '$package', '$cet_marks', '$jee_marks',
                     '$genders_accepted', '$campus_size', '$established_year', '$rating', '$university', '$facilities', '$college_type']
    ordering_fields = ['fees', 'jee_marks', ]


    def get_queryset(self):
        print('here')
        return super().get_queryset()
