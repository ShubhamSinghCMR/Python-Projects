 

import pytest
from contextlib import contextmanager
from django.template import TemplateDoesNotExist

from shuup.apps.provides import get_provide_objects, override_provides
from shuup.testing.factories import get_default_shop
from shuup.xtheme import set_current_theme
from shuup.xtheme.models import ThemeSettings
from shuup.xtheme.testing import override_current_theme_class
from shuup_tests.xtheme.utils import get_jinja2_engine


@contextmanager
def noop():
    yield


@pytest.mark.django_db
def test_theme_selection():
    """
    Test that a theme with a `template_dir` actually affects template directory selection.
    """
    shop = get_default_shop()
    with override_current_theme_class(), override_provides(
        "xtheme",
        [
            "shuup_tests.xtheme.utils:FauxTheme",
            "shuup_tests.xtheme.utils:FauxTheme2",
            "shuup_tests.xtheme.utils:H2G2Theme",
        ],
    ):
        ThemeSettings.objects.all().delete()
        for theme in get_provide_objects("xtheme"):
            set_current_theme(theme.identifier, shop)
            je = get_jinja2_engine()
            wrapper = noop() if theme.identifier == "h2g2" else pytest.raises(TemplateDoesNotExist)
            with wrapper:
                t = je.get_template("42.jinja")
                content = t.render().strip()
                assert "a slice of lemon wrapped around a large gold brick" in content.replace("\n", " ")
