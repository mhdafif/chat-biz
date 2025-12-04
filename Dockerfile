FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ----- deps -----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ----- builder -----
FROM base AS builder
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ----- runner -----
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# use the same deps as in build step
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]
