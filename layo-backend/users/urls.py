from django.urls import path

from . import views 


# /api/users/
urlpatterns = [
    path('', views.user_list_create_view),
    path('users/<int:pk>/', views.user_detail_update_view),
    path('partners', views.partner_list_view),
    path('partners/add', views.partner_create_view),
    path('partners/<int:pk>/', views.partner_detail_update_view),
]