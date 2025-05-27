# Diligence_landing

Landing page para Diligence construida con **Vite + React + Tailwind CSS**.

---

## Tecnologías y herramientas

- **Vite** (v6.3.5) como bundler moderno y rápido.
- **React** para la creación de componentes y estructura declarativa.
- **Tailwind CSS** para estilos utilitarios y responsivos.
- **PostCSS** para procesar CSS.
- Proyecto configurado para ser estático y compatible con despliegue en Vercel.

---

## Estructura del proyecto

Diligence_landing/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ └── Footer.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── counter.js
│ ├── style-tailwind.css
│ ├── style.css
│ └── javascript.svg
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

## Requisitos previos

- Node.js (v16 o superior recomendado)
- npm (v8 o superior)
- Conexión a internet para instalar dependencias

---

## Instalación

Desde la raíz del proyecto, ejecutar:

```bash
npm install
Levantar servidor de desarrollo
bash
Copiar
Editar
npm run dev
Abre el navegador en:

arduino
Copiar
Editar
http://localhost:5173/
Para exponer el servidor en red local (otro dispositivo):

bash
Copiar
Editar
npm run dev -- --host
Construir para producción
bash
Copiar
Editar
npm run build
El build listo queda en la carpeta dist/.

Uso de componentes React
Ejemplo de componente Footer (src/components/Footer.jsx):

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Diligence. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">Hecho con ❤️ por el equipo de Diligence</p>
      </div>
    </footer>
  )
}
Importar y usar en src/App.jsx:

import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <>
      {/* Otros componentes o contenido */}
      <Footer />
    </>
  )
}

Notas técnicas
El proyecto usa módulos ES ( "type": "module" en package.json ).

Configuración lista para Vercel y otros hosts de apps estáticas React.

PostCSS y Tailwind CSS configurados para estilos modernos y responsivos.

Evitar usar class en JSX, usar siempre className.

El entry point React es src/main.jsx.

Links útiles
Vite Documentation

React Documentation

Tailwind CSS

Deploy on Vercel