# Makefile

build-backend:
	docker build -t anki-tube ./backend


run-backend:
	docker run --rm -it -p 8030:8000 -v $(PWD):/app --name anki-tube anki-tube

logs:
	docker logs -f anki-tube

exec-backend:
	docker exec -it anki-tube sh


