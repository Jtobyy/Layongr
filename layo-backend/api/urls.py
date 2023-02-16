from django.urls import path
from django.views.generic.base import RedirectView
from rest_framework.authtoken.views import obtain_auth_token

from . import views


# api/
urlpatterns = [
    path('auth/', obtain_auth_token),
    path('summary/', views.api_list_view),
    path('', RedirectView.as_view(url='summary', permanent=True)),
    path('summary/add/', views.api_create_view),
    path('summary/edit/', views.api_retrieve_update_destroy_view),
]