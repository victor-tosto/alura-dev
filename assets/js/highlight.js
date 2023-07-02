// Apply highlight on text editor

const language = document.querySelector('.sidebar__select');
const codeArea = document.querySelector('.content__wrapper');
const btnHighlight = document.querySelector('.code__button-highlight');

function applyHighlight() {

    const code = codeArea.innerText;
    codeArea.innerHTML = `<code class="wrapper__text-area hljs ${language.value}" contenteditable="true"></code>`;
    codeArea.querySelector('code').textContent = code;
    hljs.highlightElement(codeArea.querySelector('code'));

}

btnHighlight.addEventListener("click", () => {
    applyHighlight();
});
