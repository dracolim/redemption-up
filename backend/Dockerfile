FROM python:3.9.9

RUN mkdir /app

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt 

EXPOSE 8000

CMD ["python3", "main.py"]