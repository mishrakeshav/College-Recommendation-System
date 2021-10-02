from django.urls import path
from .views import CollegeList, CollegeDetail

urlpatterns = [
    path('', CollegeList.as_view(), name='list_create'),
    path('<int:pk>/', CollegeDetail.as_view(), name='post_create'),

]
