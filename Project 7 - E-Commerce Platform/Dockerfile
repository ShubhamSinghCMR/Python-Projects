FROM node:12.21.0-buster-slim as base

LABEL maintainer="Eero Ruohola <eero.ruohola@shuup.com>"

RUN apt-get update \
    && apt-get --assume-yes install \
        libpangocairo-1.0-0 \
        python3 \
        python3-dev \
        python3-pil \
        python3-pip \
    && rm -rf /var/lib/apt/lists/ /var/cache/apt/

COPY . /app
WORKDIR /app

ARG editable=0

RUN if [ "$editable" -eq 1 ]; then pip3 install -r requirements-tests.txt && python3 setup.py build_resources; else pip3 install shuup; fi

RUN python3 -m shuup_workbench migrate
RUN python3 -m shuup_workbench shuup_init

RUN echo '\
from django.contrib.auth import get_user_model\n\
from django.db import IntegrityError\n\
try:\n\
    get_user_model().objects.create_superuser("admin", "admin@admin.com", "admin")\n\
except IntegrityError:\n\
    pass\n'\
| python3 -m shuup_workbench shell

CMD ["python3", "-m", "shuup_workbench", "runserver", "0.0.0.0:8000"]
