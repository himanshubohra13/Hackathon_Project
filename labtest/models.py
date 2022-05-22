from django.db import models

# Create your models here.
class LabTest(models.Model):
    photo = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank = True)
    testName = models.CharField(max_length=255)
    description = models.TextField()
    cost = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "LabTest"

    def __str__(self):
        return self.testName
