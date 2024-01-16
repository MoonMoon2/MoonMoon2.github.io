document.getElementById("newPromptBtn").onclick = loadPrompt();


function loadPrompt() {
    document.getElementById("prompt").innerHTML = promptList[Math.floor(Math.random * promptList.length)]
}

const promptList = [
    "This is a test prompt",
    "This is another"
];