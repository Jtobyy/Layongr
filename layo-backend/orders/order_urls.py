from django.urls import path
from . import views


# /api/orders/
urlpatterns = [
    path('', views.order_list_create_view),
    path('<uuid:pk>/update/', views.order_update_view),
    path('<uuid:pk>/', views.order_retrieve_view),
]