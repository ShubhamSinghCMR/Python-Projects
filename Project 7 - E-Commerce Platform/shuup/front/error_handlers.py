 
from __future__ import unicode_literals

from django.conf import settings
from django.shortcuts import render

from shuup.core.error_handling import ErrorPageHandler


class FrontPageErrorHandler(ErrorPageHandler):
    """
    Page Error handler for Shuup Front
    """

    @classmethod
    def can_handle_error(cls, request, error_status):
        # we can't handle static or media files
        if request.path.startswith(settings.STATIC_URL) or request.path.startswith(settings.MEDIA_URL):
            return False

        # Front will handle everything else, for now
        return True

    @classmethod
    def handle_error(cls, request, error_status):
        return render(request, "shuup/front/errors/{}.jinja".format(error_status), status=error_status)
