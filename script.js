function run() {
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");

    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";

    output.contentWindow.eval(jsCode.value);
}

// Copy function code
function copyCodeHtml() {
    const codeTextareaHtml = document.getElementById('html-code');
    codeTextareaHtml.select();
    document.execCommand('copy');
    alert('Code copied to clipboard');
}
function copyCodeCss() {
    const codeTextareaCss = document.getElementById('css-code');
    codeTextareaCss.select();
    document.execCommand('copy');
    alert('Code copied to clipboard');
}
function copyCodeJs() {
    const codeTextareaJs = document.getElementById('js-code');
    codeTextareaJs.select();
    document.execCommand('copy');
    alert('Code copied to clipboard');
}

// Lock/unlock function code
let isLocked = false;

const html_code = document.getElementById('html-code');
const lockButtonhtml = document.getElementById("lockUnlockhtml");

lockButtonhtml.addEventListener('click', () => {
    isLocked = !isLocked;
    html_code.disabled = isLocked;
    lockButtonhtml.textContent = isLocked ? 'Unlock' : 'Lock';
});

const css_code = document.getElementById('css-code');
const lockButtoncss = document.getElementById("lockUnlockcss");

lockButtoncss.addEventListener('click', () => {
    isLocked = !isLocked;
    css_code.disabled = isLocked;
    lockButtoncss.textContent = isLocked ? 'Unlock' : 'Lock';
});

const js_code = document.getElementById('js-code');
const lockButtonjs = document.getElementById("lockUnlockjs");

lockButtonjs.addEventListener('click', () => {
    isLocked = !isLocked;
    js_code.disabled = isLocked;
    lockButtonjs.textContent = isLocked ? 'Unlock' : 'Lock';
});
