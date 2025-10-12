from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin route
    path('', include('products.urls')),  # Includes the routes from products/urls.py
]
