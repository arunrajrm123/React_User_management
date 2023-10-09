# Generated by Django 4.2.4 on 2023-08-02 09:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="UserAccount",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                ("name", models.CharField(max_length=50)),
                ("email", models.EmailField(max_length=100, unique=True)),
                ("phonenumber", models.CharField(max_length=10, unique=True)),
                (
                    "image",
                    models.ImageField(blank=True, null=True, upload_to="profiles/"),
                ),
                ("date_joined", models.DateField(auto_now_add=True)),
                ("last_login", models.DateField(auto_now_add=True)),
                ("is_active", models.BooleanField(default=True)),
                ("is_block", models.BooleanField(default=False)),
                ("is_admin", models.BooleanField(default=False)),
                ("is_staff", models.BooleanField(default=False)),
                ("is_verified", models.BooleanField(default=False)),
                ("is_superuser", models.BooleanField(default=False)),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
