 
from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from jsonfield import JSONField
from shuup_mirage_field.fields import EncryptedCharField

from ._base import ShuupModel
from ._shops import Shop


@python_2_unicode_compatible
class ConfigurationItem(ShuupModel):
    shop = models.ForeignKey(
        on_delete=models.CASCADE, to=Shop, related_name="+", null=True, blank=True, verbose_name=_("shop")
    )
    key = models.CharField(verbose_name=_("key"), max_length=100)
    value = JSONField(verbose_name=_("value"))

    class Meta:
        unique_together = [("shop", "key")]
        verbose_name = _("configuration item")
        verbose_name_plural = _("configuration items")

    def __str__(self):
        if self.shop:
            return _("%(key)s for shop %(shop)s") % dict(key=self.key, shop=self.shop)
        else:
            return _("%(key)s (global)") % dict(key=self.key)

    def __repr__(self):
        return '<%s "%s" for %r>' % (type(self).__name__, self.key, self.shop)


@python_2_unicode_compatible
class EncryptedConfigurationItem(ShuupModel):
    shop = models.ForeignKey(
        on_delete=models.CASCADE, to=Shop, related_name="+", null=True, blank=True, verbose_name=_("shop")
    )
    key = models.CharField(verbose_name=_("key"), max_length=100)
    value = EncryptedCharField(verbose_name=_("value"))

    class Meta:
        unique_together = [("shop", "key")]
        verbose_name = _("configuration item")
        verbose_name_plural = _("configuration items")

    def __str__(self):
        if self.shop:
            return _("%(key)s for shop %(shop)s") % dict(key=self.key, shop=self.shop)
        else:
            return _("%(key)s (global)") % dict(key=self.key)

    def __repr__(self):
        return '<%s "%s" for %r>' % (type(self).__name__, self.key, self.shop)
