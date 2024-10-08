
import logging
import os
import sys
import warnings

from shuup.utils.deprecation import RemovedInFutureShuupWarning

if __name__ == "__main__":
    if not sys.warnoptions:
        # Route warnings through python logging
        logging.captureWarnings(True)
        # RemovedInFutureShuupWarning is a subclass of PendingDeprecationWarning which
        # is hidden by default, hence we force the "default" behavior
        warnings.simplefilter("default", RemovedInFutureShuupWarning)
    sys.path.insert(0, os.path.realpath(os.path.dirname(__file__) + "/.."))
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shuup_workbench.settings")
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
