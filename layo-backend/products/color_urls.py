from django.urls import path

from . import views


# /api/products/colors/
urlpatterns = [
    path('', views.color_list_view),
    path('add', views.color_create_view),
    path('<int:pk>/', views.color_retrieve_update_destroy_view),
]