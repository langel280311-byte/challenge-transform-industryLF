
import "./style.css";

const app = document.querySelector("#app");

// 1. Inyectar la interfaz de usuario estructurada profesionalmente
app.innerHTML = `
  <main class="container">
    <h1>AI Mail Assistant & CV Analyzer</h1>

    <div class="card">
      <h2>1. Entrada de Información</h2>
      <p style="color: #94a3b8; font-size: 14px; margin-bottom: 10px;">
        Pega el contenido de la Hoja de Vida (CV) o detalla el correo que deseas redactar:
      </p>
      
      <textarea id="input" placeholder="Ejemplo para CV: Perfil de desarrollador con 2 años en Node.js...\\nEjemplo para Correo: Responder amablemente a un cliente que pide un reembolso..."></textarea>

      <label for="tone">Selecciona el Objetivo / Tono:</label>
      <select id="tone">
        <option value="profesional">Profesional (Estándar)</option>
        <option value="formal">Formal y Corporativo</option>
        <option value="amigable">Amigable y Cercano</option>
        <option value="asertivo">Persuasivo y Comercial</option>
        <option value="analisis_cv">Análisis Crítico de Hoja de Vida (Reclutador)</option>
      </select>

      <div class="buttons">
        <button id="generate">Generar con IA</button>
      </div>
    </div>

    <div class="card">
      <h2>2. Resultado del Asistente</h2>
      
      <div id="loader" class="loader hidden"></div>
      
      <section class="result" id="result">La respuesta o el análisis de la IA aparecerá en esta sección...</section>

      <div class="buttons">
        <button id="copy-btn" class="secondary-btn">Copiar Resultado</button>
        <button id="export-btn" class="secondary-btn">Exportar a TXT</button>
      </div>
    </div>
  </main>
`;

// 2. Captura de Elementos del DOM
const buttonGenerate = document.querySelector("#generate");
const buttonCopy = document.querySelector("#copy-btn");
const buttonExport = document.querySelector("#export-btn");
const resultArea = document.querySelector("#result");
const loader = document.querySelector("#loader");

// 3. Controlador del Evento Principal (Petición a Ollama con phi3)
buttonGenerate.addEventListener("click", async () => {
  const inputContext = document.querySelector("#input").value.trim();
  const selectedTone = document.querySelector("#tone").value;

  // Validación inicial
  if (!inputContext) {
    resultArea.textContent = "Por favor, ingresa texto en el cuadro superior antes de continuar.";
    return;
  }

  // Activar interfaz en modo de carga
  loader.classList.remove("hidden");
  resultArea.textContent = "";

  // Ingeniería de Prompts dinámica basada en la selección del usuario
  let prompt = "";
  if (selectedTone === "analisis_cv") {
    prompt = `
Actúas como un reclutador técnico (IT Recruiter) y consultor de talento humano experto.
Analiza de forma minuciosa, crítica y constructiva la siguiente Hoja de Vida.

Estructura tu respuesta estrictamente usando los siguientes bloques legibles:
1. PUNTOS FUERTES: Aspectos destacados, habilidades clave y secciones bien estructuradas.
2. ÁREAS DE MEJORA: Elementos ausentes, errores de redacción o debilidades en el perfil.
3. RECOMENDACIONES CLAVE: Consejos prácticos e inmediatos para hacer el CV mucho más atractivo en el mercado laboral.

Aquí está la Hoja de Vida para analizar:
${inputContext}
    `;
  } else {
    prompt = `
Actúas como un asistente de comunicación corporativa experto.
Redacta un correo electrónico limpio, claro y estructurado con un tono "${selectedTone}".
Utiliza marcadores de posición lógicos como [Nombre] o [Fecha] donde corresponda para que sea una plantilla útil.

Básate estrictamente en las siguientes instrucciones y contexto:
${inputContext}
    `;
  }

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "phi3",
        prompt: prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error("No se pudo obtener respuesta de Ollama.");
    }

    const data = await response.json();
    resultArea.textContent = data.response;

  } catch (error) {
    resultArea.textContent = "Error al conectar con Ollama. Asegúrate de ejecutar el comando 'ollama run phi3' en tu terminal y que el servidor local esté activo.";
    console.error("Error en la petición:", error);
  } finally {
    // El bloque finally garantiza que el loader desaparezca pase lo que pase
    loader.classList.add("hidden");
  }
});

// 4. Funcionalidad: Copiar al Portapapeles
buttonCopy.addEventListener("click", async () => {
  const textToCopy = resultArea.textContent;
  
  if (!textToCopy || textToCopy.startsWith("La respuesta o el análisis")) {
    alert("Primero debes generar una respuesta válida.");
    return;
  }

  try {
    await navigator.clipboard.writeText(textToCopy);
    alert("¡Texto copiado al portapapeles con éxito! 📋");
  } catch (err) {
    alert("Hubo un problema al intentar copiar el texto.");
    console.error(err);
  }
});

// 5. Funcionalidad: Exportar como archivo de texto descargable
buttonExport.addEventListener("click", () => {
  const textToExport = resultArea.textContent;

  if (!textToExport || textToExport.startsWith("La respuesta o el análisis")) {
    alert("No hay datos generados para exportar.");
    return;
  }

  // Generación de un Blob nativo en memoria
  const blob = new Blob([textToExport], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  // Elemento temporal de tipo ancla para forzar el flujo de descarga del navegador
  const link = document.createElement("a");
  link.href = url;
  link.download = "Asistente_IA_Resultado.txt";
  link.click();
  
  // Liberación del objeto URL para optimizar memoria
  URL.revokeObjectURL(url);
});