# Makefile

build:
	docker build -t anki-tube .

volume:
	docker volume create anki-tube-data

run:
	docker run --rm -it -p 8030:8000 -v $(PWD):/app --name anki-tube anki-tube

logs:
	docker logs -f anki-tube

exec:
	docker exec -it anki-tube sh

remove-volume:
	docker volume rm anki-tube-data

