 
from __future__ import unicode_literals

from django.utils.translation import ugettext_lazy as _

import shuup.apps


class AppConfig(shuup.apps.AppConfig):
    name = __name__
    verbose_name = _("Import")
    label = "importer"

    provides = {
        "admin_module": ["shuup.importer.admin_module:ImportAdminModule"],
    }
