
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
            contentEl.innerHTML = htmlSnippet
        }
    )
}
        }
    )
}
