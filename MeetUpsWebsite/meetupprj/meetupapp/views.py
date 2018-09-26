from django.shortcuts import render

def index(request):
    #return HttpResponse("Hai there! Welcome to Link Healthiness Verifier")
    return render(request, 'meetupapp/index.html', {})