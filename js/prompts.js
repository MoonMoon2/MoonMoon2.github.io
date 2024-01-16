$("#newPromptBtn").on("click", function() {
    $("#prompt").html(promptList[Math.floor(Math.random() * promptList.length)])
});

const promptList = [
    "This is a test prompt",
    "This is another"
];