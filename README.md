## My portfolio website

# Build docker:
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t bryanhnguyen/portfolio:latest \
  --push .

# Run the container: 
docker run --rm -p 8080:80 bryanhnguyen/portfolio:latest
