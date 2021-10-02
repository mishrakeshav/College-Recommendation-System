import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")

import django
django.setup()

from django.core.management import call_command

import pandas as pd
from recommendation.models import College
df = pd.read_csv('../dataset/finalultrapromax.csv', sep=',')
colleges = []
for i in range(df.shape[0]):
    colleges.append(
        College(
            institute_name=df.iloc[i][1],
            state = 'Maharashtra',
            city = df.iloc[i][19],
            branch = df.iloc[i][2],
            fees = df.iloc[i][7],
            rank = df.iloc[i][4],
            percentile = df.iloc[i][5],
            avg_percentile = df.iloc[i][9],
            w1 = df.iloc[i][10],
            w2 = df.iloc[i][11],
            w3 = df.iloc[i][12],
            w4 = df.iloc[i][13],
            w5 = df.iloc[i][14],
            w6 = df.iloc[i][15],
            w7 = df.iloc[i][16],
            w8 = df.iloc[i][17],
            w9 = df.iloc[i][18],
            # campus_size = df.iloc[i][15],
            rating = df.iloc[i][8],
            # university = df.iloc[i][20],
            facilities = df.iloc[i][6],
            # college_type = df.iloc[i][25],
        )
    )

College.objects.bulk_create(colleges);
