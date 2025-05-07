# Ferretería API (Simulación con JSON Server)

Este proyecto simula una API REST para una ferretería utilizando [`json-server`](https://github.com/typicode/json-server). Está desarrollado como parte de la asignatura **Integración de plataformas** y expone dos recursos principales:

- **Productos**
- **Sucursales**

## Estructura del Proyecto
Estructura del Proyecto
ferreteria-api/
├── config/
│   └── db.json             # Base de datos JSON para json-server
├── controllers/
│   ├── productoController.js  # Controlador para los productos
│   └── sucursalController.js  # Controlador para las sucursales
├── models/
│   ├── producto.js         # Modelo para los productos
│   └── sucursal.js         # Modelo para las sucursales
├── routes/
│   ├── productoRoutes.js   # Rutas para la API de productos
│   └── sucursalRoutes.js   # Rutas para la API de sucursales
├── .env                    # Variables de entorno
├── .gitignore              # Archivos y carpetas ignorados por git
├── app.js                  # Configuración de la aplicación
├── index.js                # Punto de entrada de la aplicación
├── package-lock.json       # Control de versiones de dependencias
├── package.json            # Configuración del proyecto y dependencias
├── README.md               # Documentación del proyecto
└── server.js               # Configuración del servidor
Endpoints
El servidor API está disponible en:

http://localhost:5000/productos
http://localhost:5000/sucursales

### 1. Clonar el repositorio

git clone https://github.com/TANIAHR02/ferreteria-api.git
cd ferreteria-api

## Instalación
 Instalar json-server 

## Ejecutar 
json-server --watch config/db.json --port 5000

## Acceder a los endpoints:
http://localhost:5000/productos

http://localhost:5000/sucursales



