from django.db import models

# Create your models here.
from django.db import models

class AgendarCita(models.Model):
    # Campos del modelo AgendarCita
    fecha = models.DateField()
    hora = models.TimeField()
    nombre= models.CharField(max_length=100)
    motivo = models.TextField()

    def __str__(self):
        return f'Cita para {self.nombre} el {self.fecha} a las {self.hora}'
