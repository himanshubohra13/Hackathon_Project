from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LabTest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/')),
                ('testName', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('cost', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'LabTest',
            },
        ),
    ]
