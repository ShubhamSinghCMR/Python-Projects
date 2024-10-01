   
from __future__ import unicode_literals

from django.db import models

from shuup.core.fields import SeparatedValuesField


class FieldsModel(models.Model):
    separated_values = SeparatedValuesField(blank=True)
    separated_values_semi = SeparatedValuesField(blank=True, separator=";")
    separated_values_dash = SeparatedValuesField(blank=True, separator="-")