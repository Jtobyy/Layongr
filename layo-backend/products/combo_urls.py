from django.urls import path

from . import views


# /api/products/colors/
urlpatterns = [
    path('', views.combo_list_view),
    path('add', views.combo_create_view),
    path('<int:pk>/', views.combo_retrieve_update_destroy_view),
]