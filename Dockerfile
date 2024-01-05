FROM python:3.8-slim as base
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
ENV PYTHONDONTWRITEBYTECODE=1 \
    PY_COMPILE_DOWNLOAD_DEPS=true \
    FLASK_APP="app.py"
EXPOSE 8501
COPY . /app