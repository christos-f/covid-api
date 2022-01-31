FROM python

WORKDIR /app

COPY ./python/requirements.txt .

RUN pip install -r requirements.txt

COPY ./python .

CMD ["python", "init_db.py"]