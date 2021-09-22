from django.shortcuts import render
from .models import Show

def home(request):
	context = {
		'shows': Show.objects.all()
	}
	return render(request, 'homepage/Index.html', context)
