
    import "./style.css";

    const app = document.querySelector("#app");

    app.innerHTML = `
      <main class="container">
        <h1>CV Analyzer AI</h1>

        <textarea id="input" placeholder="Pega aquí una hoja de vida..."></textarea>

        <select id="tone">
          <option value="formal">Formal</option>
          <option value="amigable">Amigable</option>
          <option value="profesional">Profesional</option>
        </select>

        <br />

        <button id="generate">Generar con IA</button>

        <section class="result" id="result">
          La respuesta aparecerá aquí...
        </section>
      </main>
    `;

    const button = document.querySelector("#generate");
    const result = document.querySelector("#result");

    button.addEventListener("click", async () => {
      const input = document.querySelector("#input").value;
      const tone = document.querySelector("#tone").value;

      if (!input.trim()) {
        result.textContent = "Debes escribir contenido.";
        return;
      }

      result.textContent = "Generando respuesta con phi3...";

      const prompt = `

Analiza este CV y responde:
- fortalezas
- debilidades
- skills faltantes
- puntuación del 1 al 10

CV:
${input}

      `;

      try {
        const response = await fetch("http://localhost:11434/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "phi3",
            prompt,
            stream: false,
          }),
        });

        const data = await response.json();

        result.textContent = data.response;
      } catch (error) {
        result.textContent = "Error conectando con Ollama.";
        console.error(error);
      }
    });
