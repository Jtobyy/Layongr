from django.urls import path, include

from . import views


# /api/products/
urlpatterns = [
    path('', views.product_list_view),
    path('add', views.product_create_view),
    path('<int:pk>/', views.product_retrieve_update_destroy_view),
    path('tags/', include('products.tag_urls')),
    path('colors/', include('products.color_urls')),
]