
from django.contrib import admin
from django.urls import include, path

from Transport import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('transport/', include('Transport.urls'))
]
