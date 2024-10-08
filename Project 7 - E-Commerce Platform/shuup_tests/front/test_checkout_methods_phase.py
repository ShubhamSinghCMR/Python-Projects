   

import pytest
from django.utils.translation import activate

from shuup.front.views.checkout import BaseCheckoutView
from shuup.testing.utils import apply_request_middleware


class CheckoutMethodsOnlyCheckoutView(BaseCheckoutView):
    phase_specs = ["shuup.front.checkout.checkout_method:CheckoutMethodPhase"]


@pytest.mark.django_db
def test_checkout_method_phase_basic(rf):
    activate("en")
    view = CheckoutMethodsOnlyCheckoutView.as_view()

    request = apply_request_middleware(rf.get("/"))
    response = view(request=request, phase="checkout_method")
    if hasattr(response, "render"):
        response.render()
    assert response.status_code == 200
