from django.forms import ModelForm
from comunidad.models import Usuario

class UsuarioForm(ModelForm):
    class Meta:
        model= Usuario
        fields= "__all__"
        exclude=["estado",]