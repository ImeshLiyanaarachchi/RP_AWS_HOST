FROM python:3.12-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

COPY requirements.txt ./

RUN python -c "from pathlib import Path; p=Path('requirements.txt'); data=p.read_bytes(); p.write_text(data.decode('utf-16') if data.startswith((b'\\xff\\xfe', b'\\xfe\\xff')) else data.decode('utf-8'), encoding='utf-8')" \
    && python -m pip install --no-cache-dir -r requirements.txt \
    && python -m pip install --no-cache-dir 'uvicorn[standard]'

COPY . .

EXPOSE 8003

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8003"]