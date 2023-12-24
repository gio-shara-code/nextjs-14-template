# make env ENV_NAME=asdf
env:
	@vercel env add $(ENV_NAME)

env-pull:
	@vercel env pull .env.pulled.local