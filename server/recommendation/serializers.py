from django.db.models import fields
from rest_framework import serializers
from .models import *


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('first_name', 'last_name', 'email', 'phone_no')


class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = ['institute_name', 'state', 'city', 'branch', 'fees', 'package', 'cet_marks', 'jee_marks',
                  'genders_accepted', 'campus_size', 'established_year', 'rating', 'university', 'facilities', 'college_type']
