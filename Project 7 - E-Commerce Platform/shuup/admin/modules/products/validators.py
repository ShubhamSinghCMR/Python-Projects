 
from typing import Iterable

from shuup.admin.modules.products.issues import ProductValidationIssue
from shuup.core.models import Shop, ShopProduct, Supplier


class AdminProductValidator:
    """ Base class for validating products. """

    ordering = 0

    def get_validation_issues(
        shop_product: ShopProduct, shop: Shop, user, supplier: Supplier = None
    ) -> Iterable[ProductValidationIssue]:
        yield None
