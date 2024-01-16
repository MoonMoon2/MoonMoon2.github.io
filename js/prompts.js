const promptList = [
    "This is a test prompt",
    "This is another"
];

function loadPrompt() {
    document.getElementById("prompt").innerHTML = promptList[Math.floor(Math.random * promptList.length)]
}
