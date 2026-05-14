
# Reto: Transforma una Industria con IA
## Proyectos Base con Vite + JavaScript + Ollama (phi3)

## Objetivo
Cada grupo deberá tomar uno de los MVPs entregados y evolucionarlo hasta convertirlo en una solución más robusta y profesional.

Todos los proyectos:
- usan IA local con Ollama,
- funcionan con el modelo phi3,
- están desarrollados con Vite + JavaScript Vanilla,
- y buscan resolver problemas reales en diferentes industrias.

---

# Requisitos

## Instalar Ollama
https://ollama.com

## Descargar el modelo

```bash
ollama run phi3
```

## Ejecutar proyectos

```bash
npm install
npm run dev
```

---

# Proyectos incluidos

## 1. AI Mail Assistant
Industria: Comunicación empresarial

Genera correos profesionales usando IA local.

### Funcionalidades base
- generación de correos,
- selector de tono,
- respuesta IA,
- copiar resultado.

### Entregables sugeridos
#### Nivel básico
- mejorar diseño,
- agregar más tonos,
- agregar loader.

#### Nivel intermedio
- historial,
- markdown,
- exportar TXT/PDF.

#### Nivel avanzado
- streaming,
- multi idioma,
- plantillas inteligentes.

---

## 2. CV Analyzer AI
Industria: Recursos humanos

Analiza hojas de vida usando IA.

### Funcionalidades base
- análisis de CV,
- fortalezas,
- debilidades,
- puntuación.

### Entregables sugeridos
#### Nivel básico
- UI moderna,
- contador de palabras,
- validaciones.

#### Nivel intermedio
- análisis por categorías,
- skills destacadas,
- exportar análisis.

#### Nivel avanzado
- subir PDF,
- comparar candidatos,
- ranking automático.

---

## 3. Meeting Summarizer
Industria: Productividad empresarial

Resume reuniones y extrae tareas automáticamente.

### Funcionalidades base
- resumen,
- tareas,
- decisiones importantes.

### Entregables sugeridos
#### Nivel básico
- mejor diseño,
- cards visuales,
- loading states.

#### Nivel intermedio
- exportar notas,
- etiquetas,
- prioridades.

#### Nivel avanzado
- speech-to-text,
- persistencia,
- reuniones múltiples.

---

# Recomendaciones académicas

## Enfoque esperado
No presentar el proyecto como:
"Un chatbot"

Presentarlo como:
"Una solución de IA aplicada a una industria específica usando modelos locales privados."

---

# Tecnologías usadas
- Vite
- JavaScript Vanilla
- Ollama
- phi3

---

# Estructura recomendada para evolución
- mejorar prompts,
- mejorar UX,
- modularizar componentes,
- agregar persistencia,
- implementar streaming,
- incorporar nuevas funcionalidades.

