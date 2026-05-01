## My portfolio website

# Build docker:

docker buildx build \
 --platform linux/amd64,linux/arm64 \
 -t ghcr.io/nguyenhbryan/portfolio:latest \
 --push .

# Run the container:

docker run --rm -p 8080:80 ghcr.io/nguyenhbryan/portfolio:latest

# chances are the PAT token to push to ghcr may be outdated, so renew and run:

echo YOUR_GITHUB_PAT | docker login ghcr.io -u MY_USER --password-stdin

# ran into npm run build error 4/30/26

esbuild version did not match but I honestly have no idea how i fixed it
