
"""
WSGI config for shuup_workbench project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application  # noqa (E402)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shuup_workbench.settings")  # noqa

application = get_wsgi_application()
