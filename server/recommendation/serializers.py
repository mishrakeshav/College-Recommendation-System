from django.db.models import fields
from rest_framework import serializers
from .models import *


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('first_name', 'last_name', 'email', 'phone_no')


class CollegeSerializer(serializers.ModelSerializer):

    college_branch = serializers.SerializerMethodField()

    class Meta:
        model = College
        fields = [
            'id',
            'institute_name',
            'percentile',
            'avg_percentile',
            'state',
            'city',
            'branch',
            'fees',
            'rank',
            'rating',
            'facilities',
            'college_branch'
        ]

    def get_college_branch(self, obj):
        institute_name = obj.institute_name

        pool = College.objects.filter(institute_name=institute_name).all()
        department_cutoff = {}
        for college in pool:
            department_cutoff[college.branch] = {
                'percentile': college.percentile,
                'avg_percentile': college.avg_percentile,
            }
        return department_cutoff
