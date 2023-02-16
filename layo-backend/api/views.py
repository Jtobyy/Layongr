from rest_framework import generics, permissions
# from django.http import JsonResponse, HttpResponse
# from django.forms.models import model_to_dict
# data = model_to_dict(model_data, fields['id', 'title'])
# request.headers
# dict(request.content_type)

from .models import APIS
from .serializers import APISSerializer
from .permissions import IsStaffEditorPermission

# return HttpResponse(data, headers={"content-type": "application/json"}) or JsonResponse()
class APISListView(generics.ListAPIView):
    """
    This view shows a summary of all the APIs present in the app with short description.
    """    
    queryset = APIS.objects.all()
    serializer_class = APISSerializer

api_list_view = APISListView.as_view()

class APISCreateView(generics.CreateAPIView):
    """
    This allows staffs to add more API documentations.
    """    
    queryset = APIS.objects.all()
    serializer_class = APISSerializer

    permission_classes = [IsStaffEditorPermission]    

api_create_view = APISCreateView.as_view()

class APISEditView(generics.RetrieveUpdateDestroyAPIView):
    """
    This allows staffs to add, delete or update the API documentations.
    """    
    queryset = APIS.objects.all()
    serializer_class = APISSerializer

    permission_classes = [IsStaffEditorPermission]    

api_retrieve_update_destroy_view = APISEditView.as_view()

