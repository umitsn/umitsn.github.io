
const contentEl = document.getElementById("content")

const LoadPage = (page) => {
    fetch(`${page}.html`).then(
        res => {
            if (res.ok) {
                return res.text()
            }
        }
    ).then(
        htmlSnippet => {
            contentEl.innerHTML = htmlSnippet;

// Eğer ytPlaylist yüklendiyse script dosyasını da yükle
      if (page === "script2") {
        const script = document.createElement("script");
        script.src = "script2.js";
        script.defer = true;
        document.body.appendChild(script);
      }

            
        }
    )
}
