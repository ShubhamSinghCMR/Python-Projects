 
import pytest
from django.conf import settings
from django.test.utils import override_settings

from shuup.admin.module_registry import replace_modules
from shuup.admin.views.search import get_search_results
from shuup.guide.admin_module import GuideAdminModule


@pytest.mark.django_db
def test_search(client, rf):
    if "shuup.guide" not in settings.INSTALLED_APPS:
        pytest.skip("Need shuup.guide in INSTALLED_APPS")
    request = rf.get("/")
    search_term = "customer"
    request.session = client.session
    with replace_modules([GuideAdminModule]):
        with override_settings(SHUUP_GUIDE_FETCH_RESULTS=False):
            results = get_search_results(request, search_term)
            assert [r for r in results if search_term in r.text]
