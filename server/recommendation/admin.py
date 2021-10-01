from django.contrib import admin

from . import models

class CollegeAdmin(admin.ModelAdmin):
    list_display = (
        'id', 
        'institute_name',
        'state' , 
        'city', 
        'branch', 
        'fees', 
        'package',
        'cet_marks', 
        'jee_marks',
        'rating'
    )
    list_display_links = ('id','institute_name')
    search_fields =  (
        'id', 
        'institute_name',
        'state' , 
        'city', 
        'branch', 
        'fees', 
        'package',
        'cet_marks', 
        'jee_marks',
        'rating',
        'facilities'
    )
    list_per_page = 40


class StudentAdmin(admin.ModelAdmin):
    list_display = (
        'id', 
        'first_name',
        'last_name' , 
        'email', 
        'phone_no', 
    )
    list_display_links = ('id','first_name', 'last_name')
    search_fields =   (
        'id', 
        'first_name',
        'last_name' , 
        'email', 
        'phone_no', 
    )
    list_per_page = 40


admin.site.register(models.College , CollegeAdmin)
admin.site.register(models.Student , StudentAdmin)