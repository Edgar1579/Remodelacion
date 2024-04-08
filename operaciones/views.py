from django.shortcuts import render


def agendar_cita(request):
    # Tu lógica para agendar citas aquí
    return render(request, 'agendar_cita.html')
