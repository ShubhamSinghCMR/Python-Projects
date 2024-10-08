   
from django.utils.translation import activate
from random import random

from shuup.utils.i18n import lang_lru_cache


def test_lang_lru_cache():
    """Test that functions are cached on a per-language basis"""

    @lang_lru_cache
    def cached_random():
        return random()

    activate("en")
    en = cached_random()
    assert en == cached_random()

    activate("fi")
    fi = cached_random()
    assert fi == cached_random()

    activate("sv")
    sv = cached_random()
    assert sv == cached_random()

    assert en != fi != sv
