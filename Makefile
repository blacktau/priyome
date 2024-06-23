.PHONY: tailwind-watch
tailwind-watch:
	tailwindcss -i ./static/css/input.css -o ./static/css/style.css --watch

.PHONY: tailwind-build
tailwind-build:
	tailwindcss -i ./static/css/input.css -o ./static/css/style.min.css --minify

.PHONY: templ-generate
templ-generate:
	templ generate

.PHONY: templ-watch
templ-watch:
	templ generate --watch

.PHONY: dev
dev:
	go build -o ./tmp/$(APP_NAME) ./cmd/$(APP_NAME)/main.go && air

.PHONY: js-build
js-build:
	./node_modules/.bin/esbuild static/script/src/scripts.js --bundle --minify --platform=browser --outfile=static/script/script.min.js

.PHONY: js-watch
js-watch:
	./node_modules/.bin/esbuild static/script/src/scripts.js --bundle --watch --sourcemap --platform=browser --outfile=static/script/script.js
	
.PHONY: build
build:
	make tailwind-build
	make templ-generate
	make js-build
	go build -ldflags "-X main.Environment=production" -o ./bin/$(APP_NAME) ./cmd/$(APP_NAME)/main.go

.PHONY: vet
vet:
	go vet ./...

.PHONY: staticcheck
staticcheck:
	staticcheck ./...

.PHONY: test
test:
	  go test -race -v -timeout 30s ./...


