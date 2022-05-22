from django.shortcuts import render
from labtest.models import LabTest
from django.views.generic import ListView

# Create your views here.
class DisplayTest(ListView):
    model = LabTest
    template_name = 'labTests/index.html'
    context_object_name = 'tests'
