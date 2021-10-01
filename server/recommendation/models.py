from django.db import models


class College(models.Model):
    institute_name = models.CharField(max_length=2000, blank=True, null=True)
    state = models.CharField(max_length=2000, blank=True, null=True)
    city = models.CharField(max_length=2000, blank=True, null=True)
    branch = models.CharField(max_length=2000, blank=True, null=True)
    fees = models.FloatField(blank=True, null=True)
    package = models.FloatField(blank=True, null=True)
    cet_marks = models.IntegerField(blank=True, null=True)
    jee_marks = models.IntegerField(blank=True, null=True)
    genders_accepted = models.CharField(max_length=2000, blank=True, null=True)
    campus_size = models.CharField(max_length=2000, blank=True, null=True)
    established_year = models.IntegerField(blank=True, null=True)
    rating = models.FloatField(blank=True, null=True)
    university = models.CharField(max_length=2000, blank=True, null=True)
    facilities = models.CharField(max_length=4000, blank=True, null=True)
    college_type = models.CharField(max_length=2000, blank=True, null=True)

    def __str__(self) -> str:
        return f'{self.institute_name}'


class Student(models.Model):
    first_name = models.CharField(max_length=2000, blank=True)
    last_name = models.CharField(max_length=2000, blank=True)
    email = models.CharField(max_length=2000, blank=True, null=True)
    phone_no = models.CharField(max_length=2000, blank=True, null=True)
    college_preference = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, blank=True, null=True)
