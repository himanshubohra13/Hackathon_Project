from django.urls import path, include
from cad import views

urlpatterns = [
    path('' , views.home , name = 'index'),
    path('get-started' , views.start , name = 'get-started'),
    path('home', views.front , name = 'home'),

    path('calculate-bmi/' , views.bmiCalc , name = 'bmi-calculator'),

    path('alzheimer/' , views.alzheimerPred , name = 'alzheimer-predict'),

    path('cancer/' , views.cancer , name = 'cancer-view'),
    path('cancer-prediction/' , views.cancerPred , name = 'cancer-predict'),

    path('brain-tumor/' , views.brainPred , name = 'brain-tumor-predict'),

    path('covid/' , views.covidPred , name = 'covid-predict'),

    path('diabetes/' , views.diabetes , name = 'diabetes-view'),
    path('diabetes-prediction/' , views.diabetesPred , name = 'diabetes-predict'),

    path('glaucoma/' , views.glaucomaPred , name = 'glaucoma-predict'),

    path('heart-disease/' , views.heart , name = 'heart-disease-view'),
    path('heart-disease-prediction/' , views.heartPred , name = 'heart-disease-predict'),

    path('liver/' , views.liver , name = 'liver-view'),
    path('liver-prediction/' , views.liverPred , name = 'liver-predict'),

    path('malaria/' , views.malariaPred , name = 'malaria-predict'),

    path('know-your-disease' , views.symptomsDis , name = 'know-your-disease'),
    path('medicine-recommendation' , views.drugRecommend , name = 'recommend-medicine'),
]