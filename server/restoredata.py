import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")

import django
django.setup()

from django.core.management import call_command

import pandas as pd
from recommendation.models import College
df = pd.read_csv('../dataset/database.csv', sep=',')
colleges = []
for i in range(1,len(df)):
    colleges.append(
        College(
            institute_name=df.iloc[i][2],
            state = df.iloc[i][23],
            city = df.iloc[i][22],
            branch = df.iloc[i][3],
            fees = df.iloc[i][26],
            genders_accepted = df.iloc[i][14],
            jee_marks = df.iloc[i][13],
            # campus_size = df.iloc[i][15],
            established_year = df.iloc[i][18],
            rating = df.iloc[i][19],
            university = df.iloc[i][20],
            facilities = df.iloc[i][21],
            college_type = df.iloc[i][25],
        )
    )

print(colleges[:10])
College.objects.bulk_create(colleges);