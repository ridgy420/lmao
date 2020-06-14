from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from .models import Music
from.serializers import MusicSerializer
from rest_framework import viewsets, filters

@require_http_methods(["GET", "POST"])
def root(request):
    if request.method == 'GET':
        return HttpResponse("Hello World!")
    elif request.method == 'POST':
        print('Request:', request.text, request.body)
        return HttpResponse("Hello World received!")

class MusicViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['artist', 'listeners']