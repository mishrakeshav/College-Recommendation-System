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
        fields = [
        'institute_name',
        'percentile',
        'avg_percentile',
        'state',
        'city',
        'branch',
        'fees',
        'rank',
        'rating',
        'facilities'
    ]
