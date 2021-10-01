from django.urls import path
from .views import CollegeList

urlpatterns = [
    path('', CollegeList.as_view(), name='list_create'),
]
