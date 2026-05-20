# Autores

Luis Fuentes
Isaac Ortiz

# AI Mail Assistant + CV Analyzer

Aplicación web desarrollada con JavaScript Vanilla + Vite + Ollama + Phi3.

Este proyecto utiliza inteligencia artificial local mediante Ollama para:

- generar correos profesionales,
- analizar hojas de vida,
- proporcionar feedback profesional basado en IA.

---

# Características

## Generador de correos con IA

- Generación automática de correos
- Selector de tono:
  - Formal
  - Amigable
  - Profesional
  - Corporativo
  - Empático
  - Persuasivo
- Copiar respuesta al portapapeles
- Loader de carga
- Diseño responsive

---

## Analizador de hoja de vida

- Subida de archivos TXT
- Análisis profesional mediante IA
- Evaluación de:
  - fortalezas,
  - debilidades,
  - habilidades faltantes,
  - nivel profesional,
  - recomendaciones de mejora,
  - feedback general.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Vite
- Ollama
- Modelo Phi3

---

# Requisitos

Tener instalado:

- Node.js
- Ollama

---

# Instalación

## 1. Clonar repositorio

```bash
git clone <url-del-repositorio>
```

---

## 2. Entrar al proyecto

```bash
cd ai-mail-assistant
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Ejecutar Ollama

Verificar que Ollama esté funcionando:

```bash
ollama run phi3
```

---

## 5. Ejecutar proyecto

```bash
npm run dev
```

---

# Estructura del proyecto

```bash
ai-mail-assistant/
│
├── src/
│   ├── main.js
│   ├── style.css
│
├── index.html
├── package.json
├── README.md
```

---

# Funcionamiento de IA

La aplicación se conecta localmente con:

```bash
http://localhost:11434/api/generate
```

Utilizando el modelo:

```bash
phi3
```

---

# Funcionalidades del sistema

## Generación de correos

El usuario escribe una situación o necesidad empresarial y la IA genera automáticamente un correo profesional adaptado al tono seleccionado.

---

## Análisis de hoja de vida

El usuario puede subir una hoja de vida en formato `.txt` y la IA realizará un análisis profesional que incluye:

- Resumen del perfil
- Fortalezas
- Debilidades
- Recomendaciones
- Habilidades faltantes
- Nivel profesional
- Feedback general

---

# Futuras mejoras

- Exportar PDF
- Historial de correos
- Drag & Drop
- Soporte para PDF y DOCX
- Modo oscuro/claro
- Streaming en tiempo real
- Chat IA empresarial
- Análisis ATS para CV
- Integración con bases de datos
- Dashboard administrativo
- Plantillas de correos automáticas

---

# Autores

## Luis Fuentes

Estudiante de Administración de Empresas y desarrollador en formación enfocado en soluciones con inteligencia artificial, automatización y desarrollo web.

---

## Isaac Ortiz

Desarrollador en formación enfocado en tecnologías web, inteligencia artificial y soluciones digitales innovadoras.

---

# Licencia

Proyecto académico y educativo.