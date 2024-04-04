from django.shortcuts import render, redirect
from comunidad.forms import UsuarioForm
from PIL import Image
# Create your views here.
def usuario(request):
    titulo="Usuarios"
    if request.method=="POST":
        form= UsuarioForm(request.POST,request.FILES)
        if form.is_valid():
            usuario= form.save()
            if usuario.imagen:
                img= Image.rezise((500,500))
                img.save(usuario.imagen.path)
            usuario.save()
            ## agregar el mensaje de exito
            return redirect("usuarios")
        else:
            ## agregar mensaje de error
            pass
    else:
        form=UsuarioForm()
    context={
        "titulo":titulo,
        "form":form,
    }
    return render(request,"admin/comunidad/usuarios/usuarios.html", context)           
    