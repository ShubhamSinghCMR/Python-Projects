 
import random
from django.conf import settings
from django.utils import translation

from shuup.core.models import Category, Product, ShopProduct

from .factories import (
    CategoryFactory,
    ProductFactory,
    create_default_order_statuses,
    get_currency,
    get_default_customer_group,
    get_default_payment_method,
    get_default_shipping_method,
    get_default_shop,
)


class Populator:
    def __init__(self):
        self.shop = get_default_shop()

    def populate(self):
        translation.activate(settings.LANGUAGES[0][0])

        # Create default objects
        get_default_payment_method()
        get_default_shipping_method()
        create_default_order_statuses()
        get_currency("EUR")
        get_currency("USD")
        get_currency("BRL")
        get_currency("GBP")
        get_currency("CNY")
        get_currency("JPY", digits=0)

        category_created = False
        while Category.objects.count() < 5:
            CategoryFactory()
            category_created = True

        if category_created:
            Category.objects.rebuild()

        while Product.objects.count() < 30:
            product = ProductFactory()
            self.generate_pricing(product)

    def generate_pricing(self, product):
        if "shuup.customer_group_pricing" in settings.INSTALLED_APPS:
            from shuup.customer_group_pricing.models import CgpPrice

            CgpPrice.objects.create(
                product=product,
                price_value=random.randint(15, 340),
                shop=get_default_shop(),
                group=get_default_customer_group(),
            )

    def populate_if_required(self):
        if ShopProduct.objects.filter(shop=self.shop).count() < 5:
            self.populate()

        from django.core.management import call_command

        call_command("reindex_product_catalog")


def populate_if_required():
    Populator().populate_if_required()
