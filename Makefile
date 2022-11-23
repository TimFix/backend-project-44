install: install-deps
	npx simple-git-hooks

brain-games:
	bin/brain-games.js

install-deps:
	npm ci

publish:
	npm publish --dry-run