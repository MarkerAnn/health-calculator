FROM node:20.11.1-slim

WORKDIR /app

# Copy the entire project
COPY . .

# Install dependencies and build
RUN npm ci && \
    npm run build

# Debug and show structure
RUN echo "Project structure:" && \
    ls -la && \
    echo "Dist folder:" && \
    ls -la dist/ && \
    find dist -name "unitConverter.js" || echo "unitConverter.js not found"

# Create test environment directly
WORKDIR /test
RUN npm init -y && \
    echo '{"type":"module"}' > package.json

# Copy built files directly instead of packing
RUN mkdir -p node_modules/body-measurements && \
    cp -r /app/dist node_modules/body-measurements/ && \
    cp /app/package.json node_modules/body-measurements/

# Copy test file
COPY docker-test.mjs test.mjs

# Show final structure
RUN echo "Test environment:" && \
    ls -la && \
    echo "Module structure:" && \
    ls -la node_modules/body-measurements/

# Run tests
CMD ["node", "test.mjs"]
