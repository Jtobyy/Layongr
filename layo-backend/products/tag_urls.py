from django.urls import path

from . import views


# /api/products/tags/
urlpatterns = [
    path('', views.tag_list_view),
    path('add', views.tag_create_view),
    path('<int:pk>/', views.tag_retrieve_update_destroy_view),
]