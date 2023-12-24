deploy:
	@vercel

deploy-prod:
	@vercel --prod --skip-domain

# once production deployment is ready, promote it to production
promote:
	@vercel promote ID=$(ID)

# make env ENV_NAME=asdf
env:
	@vercel env add $(ENV_NAME)

env-pull:
	@vercel env pull .env.pulled.local
