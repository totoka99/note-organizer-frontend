APP = frontend
BIN_LINUX = ./app/$(APP)
GCP_PROJECT_ID = angular-gg-131f2
ENVIRONMENT = dev


gcloud-conf:
	gcloud config set project angular-gg-131f2
gcloud-build:
	docker build -t gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) .
gcloud-push:
	docker push gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT)
gcloud-remove-im:
	gcloud container images delete gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) 
gcloud-remove-ser:
	gcloud run services delete frontend
gcloud-deploy:
	gcloud run deploy $(APP)-$(ENVIRONMENT) \
	--image gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) \
	--platform managed \
	--port 4200 \
	--max-instances 1 \
	--project $(GCP_PROJECT_ID) \
	--labels environment=$(ENVIRONMENT) \
	--allow-unauthenticated
