from django_filters import *
from cookiecutter_backend.users.models import User


class UserFilter(FilterSet):
    class Meta:
        model = User
        fields = {
            'id': ['exact'],
            'email': ['exact'],
        }
