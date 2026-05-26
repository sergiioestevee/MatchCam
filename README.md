# MatchCam Frontend

Frontend de MatchCam construido con **React + Vite + TypeScript**, orientado a escalabilidad, legibilidad y seguridad desde el tipado.

## Stack

- React 19
- Vite 8
- TypeScript (modo estricto)
- Material UI
- React Router
- React Hook Form + Zod

## Requisitos

- Node.js 22+
- npm 10+

## Puesta en marcha

```bash
npm install
npm run dev
```

Aplicación disponible por defecto en `http://localhost:5173`.

## Scripts

- `npm run dev`: entorno de desarrollo
- `npm run build`: build de producción
- `npm run preview`: servir build localmente
- `npm run lint`: análisis estático con ESLint
- `npm run typecheck`: comprobación de tipos TypeScript

## Rutas actuales

- `/login`: pantalla de inicio de sesión
- `/register`: placeholder para flujo de registro
- `*`: redirección automática a `/login`

## Estructura del proyecto

```text
src/
  app/
    App.tsx
    router.tsx
    providers/
      AppProviders.tsx
  components/
    auth/
      BrandMark.tsx
  layouts/
    AuthLayout.tsx
  pages/
    auth/
      LoginPage.tsx
      RegisterPage.tsx
  theme/
    theme.ts
  types/
    auth.ts
  main.tsx
  index.css
```

## Tipado y validación

El proyecto usa validación declarativa con `zod` y formularios controlados con `react-hook-form`.

- Schema de login en `src/types/auth.ts`
- Validación condicional por método (`email`/`phone`)
- Configuración estricta en `tsconfig.app.json` para minimizar errores en runtime

## Estado actual

- Base de autenticación lista para iterar
- Layout y router preparados para añadir nuevas páginas
- Sistema de tema centralizado en Material UI
