from django.urls import path, include
from labtest import views

urlpatterns = [
    path('', views.DisplayTest.as_view(), name='lab-test'),
]
