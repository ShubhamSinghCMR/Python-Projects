 
from shuup.testing import factories
from shuup.xtheme.editing import could_edit, is_edit_mode, set_edit_mode
from shuup_tests.utils.faux_users import SuperUser


def test_edit_priv(rf):
    request = rf.get("/")
    request.user = SuperUser()
    request.shop = factories.get_default_shop()
    request.session = {}
    assert could_edit(request)
    assert not is_edit_mode(request)
    set_edit_mode(request, True)
    assert is_edit_mode(request)
    set_edit_mode(request, False)
    assert not is_edit_mode(request)
