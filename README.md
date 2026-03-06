# Trabajo Final – Desarrollo Web Frontend

## Descripción del proyecto

Este proyecto es una aplicación web desarrollada con **React** como trabajo práctico final de la materia **Desarrollo Web Frontend**.

La aplicación consiste en un **sistema de chat** que permite a los usuarios registrarse dentro de la aplicación y mantenerse logueados utilizando **React Context** y **localStorage** para la persistencia de la sesión.

El usuario puede interactuar con una lista de contactos simulados y enviar mensajes dentro de la interfaz de chat.

El objetivo del proyecto es aplicar conceptos fundamentales de desarrollo frontend moderno como:

* Componentes en React
* Manejo de estado global con Context
* Enrutamiento con React Router
* Persistencia de datos en el navegador
* Organización de un proyecto frontend
* Documentación y despliegue de una aplicación

---

# Tecnologías utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

* **React**
* **React Router**
* **JavaScript (ES6+)**
* **Vite**
* **CSS**
* **LocalStorage**
* **Vercel (deploy)**

---

# Funcionalidades implementadas

El proyecto incluye las siguientes funcionalidades principales:

### Registro de usuario

Ruta:

/registro

Permite registrar un nuevo usuario en la aplicación mediante un formulario con validaciones.

Campos principales:

* Nombre
* Email
* Contraseña

Validaciones implementadas:

* Nombre obligatorio (mínimo 3 caracteres)
* Email obligatorio con formato válido
* Contraseña obligatoria (mínimo 6 caracteres)

---

### Persistencia de usuario

El usuario registrado se guarda utilizando **React Context** y **localStorage**, lo que permite que la sesión permanezca activa incluso al recargar la página.

---

### Sistema de chat

La aplicación incluye una interfaz de chat donde el usuario puede:

* Ver contactos disponibles
* Seleccionar un contacto
* Enviar mensajes
* Visualizar mensajes enviados y recibidos

Los mensajes incluyen:

* Autor
* Hora de envío
* Contenido del mensaje

---

### Página pública de documentación

Ruta:

/acerca

Esta página explica:

* El objetivo del proyecto
* Las tecnologías utilizadas
* La estructura de la aplicación
* Decisiones de desarrollo

La página es accesible **sin necesidad de estar registrado**.

---

# Estructura del proyecto

La aplicación sigue una estructura modular para organizar los diferentes componentes y funcionalidades.

```
src
 ├─ components
 ├─ context
 │   └─ ChatContext.jsx
 ├─ pages
 │   ├─ Login.jsx
 │   ├─ Register.jsx
 │   └─ Chat.jsx
 ├─ services
 │   └─ mockApi.js
 ├─ styles
 └─ main.jsx
```

Descripción general:

* **components** → componentes reutilizables de la interfaz
* **context** → manejo de estado global de la aplicación
* **pages** → vistas principales de la aplicación
* **services** → datos simulados y utilidades
* **styles** → estilos de la aplicación

---

# Instalación y ejecución local

Para ejecutar el proyecto en un entorno local:

### 1. Clonar el repositorio

```
git clone https://github.com/catalinawaldman/trabajo-final.git
```

### 2. Entrar en la carpeta del proyecto

```
cd trabajo-final
```

### 3. Instalar dependencias

```
npm install
```

### 4. Ejecutar el proyecto

```
npm run dev
```

La aplicación se abrirá en:

```
http://localhost:5173
```

---

# Deploy del proyecto

El proyecto está desplegado utilizando **Vercel**.

Link del deploy:

(Aquí debes colocar tu link de Vercel)

Ejemplo:

```
https://mi-proyecto.vercel.app
```

---

# Documentación adicional

Además del README, el proyecto incluye documentación generada con **DeepWiki**.

Link de documentación:

(Aquí debes colocar el link de DeepWiki)

Ejemplo:

```
https://deepwiki.com/catalinawaldman/trabajo-final
```

---

# Autor

Proyecto desarrollado por:

Catalina Waldman

Como trabajo práctico final para la materia **Desarrollo Web Frontend**.
