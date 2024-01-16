const promptList = [
    "This is a test prompt",
    "This is another"
];

function loadPrompt() {
    const promptNum = Math.floor(Math.random * promptList.length);
    document.getElementById("prompt").innerHTML = promptList[promptNum];
}
