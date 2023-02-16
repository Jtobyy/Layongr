from django.urls import path
from . import views


# /api/payments/
urlpatterns = [
    path('', views.payment_list_create_view),
    path('<uuid:pk>/update/', views.payment_update_view),
    path('<uuid:pk>/', views.payment_retrieve_view),
]