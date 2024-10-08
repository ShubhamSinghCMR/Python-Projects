 
from __future__ import with_statement

from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "shuup/front/index.jinja"

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        # TODO: dispatch_hook("get_context_data", view=self, context=context)
        return context
