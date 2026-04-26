# MkDocs Deploy

Guia de deploy e CI/CD para documentação MkDocs.

---

## 1. Build

### 1.1 Build Local

```bash
mkdocs build
# Output: site/
```

### 1.2 Build Limpo

```bash
mkdocs build --clean
```

### 1.3 Build para Deploy

```bash
mkdocs build --strict
```

---

## 2. GitHub Pages

### 2.1 Configurar Repo

```bash
# No GitHub: Settings > Pages
# Source: Deploy from a branch
# Branch: gh-pages / (root)
```

### 2.2 Personal Token

```bash
# GitHub > Settings > Developer settings > Personal access tokens
# Generate new token with repo scope
```

### 2.3 Deploy Script

```bash
mkdocs gh-deploy --strict
```

---

## 3. GitHub Actions

### 3.1 Workflow Básico

```yaml
# .github/workflows/docs.yml
name: Deploy Docs

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          pip install mkdocs-material
          pip install mkdocs-material[pymdown]
      
      - name: Build docs
        run: mkdocs build --strict
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
```

### 3.2 Workflow com Cache

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Cache dependencies
        uses: actions/cache@v4
        with:
          path: ~/.cache/pip
          key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-
      
      - name: Install
        run: pip install mkdocs-material
      
      - name: Build
        run: mkdocs build --strict
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
```

### 3.3 Multi-idioma

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        lang: [en, pt-BR, es]
    steps:
      - uses: actions/checkout@v4
      
      - name: Build ${{ matrix.lang }}
        run: |
          pip install mkdocs-material
          mkdocs build -e ${{ matrix.lang }}
      
      - name: Deploy ${{ matrix.lang }}
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site/${{ matrix.lang }}
          keep_history: false
```

---

## 4. Netlify

### 4.1 netlify.toml

```toml
[build]
  command = "pip install mkdocs-material && mkdocs build"
  publish = "site"

[build.environment]
  PYTHON_VERSION = "3.11"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 4.2 Deploy

```bash
# Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

---

## 5. Vercel

### 5.1 vercel.json

```json
{
  "buildCommand": "pip install mkdocs-material && mkdocs build",
  "outputDirectory": "site"
}
```

### 5.2 requirements.txt

```
mkdocs-material
```

### 5.3 Deploy

```bash
# Vercel CLI
npm install -g vercel
vercel --prod
```

---

## 6. Docker

### 6.1 Dockerfile

```dockerfile
FROM python:3.11-slim

WORKDIR /docs

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
RUN mkdocs build

FROM nginx:alpine
COPY --from=0 /docs/site /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 6.2 docker-compose.yml

```yaml
version: '3.8'

services:
  docs:
    build: .
    ports:
      - "8000:80"
    volumes:
      - ./docs:/docs
```

### 6.3 Build e Run

```bash
docker build -t my-docs .
docker run -p 8000:80 my-docs
```

---

## 7. CircleCI

```yaml
version: 2.1

orbs:
  python: circleci/python@2.1.1

jobs:
  build:
    docker:
      - image: cimg/python:3.11
    steps:
      - checkout
      - python/install-packages:
          pkg-manager: pip
      - run:
          name: Build docs
          command: mkdocs build --strict
      - store_artifacts:
          path: site

workflows:
  deploy:
    jobs:
      - build:
          filters:
            branches:
              only: main
```

---

## 8. GitLab CI/CD

```yaml
pages:
  image: python:3.11
  script:
    - pip install mkdocs-material
    - mkdocs build --strict
  artifacts:
    paths:
      - public
  only:
    - main
```

---

## Cross-refs

- [setup.md](setup.md) - Setup inicial
- [configuration.md](configuration.md) - Configuração completa