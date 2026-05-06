# 🌍 Europa 2025 - Itinerario de Viaje

Aplicación web interactiva para visualizar el itinerario de viaje a Europa (2-20 junio 2025).

## 🚀 Desarrollo local

```bash
cd europe-trip
npm install
npm run dev
```

Abre http://localhost:5173/europe-trip/

## 📦 Build para producción

```bash
npm run build
```

Los archivos se generan en `dist/`.

## 🌐 Deploy en GitHub Pages

### Opción 1: Manual
```bash
npm run build
npx gh-pages -d dist
```

### Opción 2: GitHub Actions
Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Configuración importante
El `base` path en `vite.config.ts` está configurado como `/europe-trip/`. 
Si tu repositorio tiene otro nombre, cámbialo en `vite.config.ts`:

```ts
export default defineConfig({
  base: '/tu-nombre-de-repo/',
})
```

## ✨ Características

- 📱 Mobile-first, completamente responsive
- 🎨 Colores por país (España, Italia, Suiza, Bélgica, Francia)
- 🗺️ Links directos a Google Maps para cada actividad y hotel
- 👥 Filtros por persona, país y tipo de actividad
- 🎬 Animaciones suaves con Framer Motion
- 📍 Ubicaciones validadas desde archivo de referencia
- ✨ Actividades opcionales colapsables por ciudad

## 👥 Viajeros

Ivania • Jonathan • Jurgen • Sharon (Shasha) • Hayley • Jimena • Giselle • Carlos
