# 🏄‍♂️ Antepaz Surf Experience - Frontend (Sprint 1)

Bienvenido/a al repositorio oficial de **Antepaz Surf Experience** , una plataforma web desarrollada para la gestión y reserva de clases, tours y equipos de surf. Escuela existente en la vida real úbicada en Panamá.

---

## 📌 Proyecto Final - Digital House

* **Estudiante:** Antonio Antepaz
* **Sprint:** 1 (Maquetación, UI/UX, Componentes Interactivos & Panel Admin)
* **Tecnologías:** React (Vite), JavaScript (ES6+), CSS3 (Flexbox/Grid), HTML5, Git/GitHub.

---

## 🚀 Funcionalidades Desarrolladas en el Sprint 1

### 🏠 Vista Pública (Home)
* **Header & Footer:** Encabezado con navegación corporativa y pie de página completo con enlaces de interés y redes sociales.
* **Sección Hero & Buscador:** Barra de búsqueda visual para filtrar servicios.
* **Categorías Dinámicas:** Tarjetas interactivas de servicios (Clases, Alquileres, Trips).
* **Productos Recomendados:** Listado dinámico con **paginación funcional (4 productos por página)**.
* **Detalle de Producto:** Vista previa con imágenes, precios y características. **Las imágenes luego las cambiaré.
* **Galería de Imágenes:** Visualizador fotográfico de experiencias.

### 🔐 Panel de Administración (`/administracion`)
* **Acceso por URL:** Enrutado nativo para ingresar a la gestión `/administracion`.
* **Navegación por Pestañas:** Alternancia dinámica entre *"Agregar Producto"*, *"Listado de Productos"* y *"Estadísticas"*.
* **Formulario AddProduct:** Formulario para registrar nuevos productos con validaciones de campos obligatorios.
* **Tabla de Productos:** Listado interactivo de ítems con columnas `Id`, `Nombre` y `Acciones`.
* **Eliminar Producto:** Confirmación de seguridad (`window.confirm`) para eliminar productos del estado en tiempo real.
* **Restricción Móvil (Responsive):** Bloqueo de seguridad con pantalla de advertencia para resoluciones menores a 768px (`@media query`).

---

## 🛠️ Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/AntonioAntepaz/antepazSurfExperience.git