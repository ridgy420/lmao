from django.http import HttpResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET", "POST"])
def root(request):
    if request.method == 'GET':
        return HttpResponse("Hello World!")
    elif request.method == 'POST':
        print('Request:', request.text, request.body)
        return HttpResponse("Hello World received!")
