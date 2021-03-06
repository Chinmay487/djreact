
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('admin/', admin.site.urls),
    path('api/',include('articles.urls')),
]


# https://www.youtube.com/watch?v=uZgRbnIsgrA&list=PLLRM7ROnmA9FxCtnLoIHAs6hIkJyd1dEx&index=1


# https://www.youtube.com/playlist?list=PLLRM7ROnmA9FxCtnLoIHAs6hIkJyd1dEx