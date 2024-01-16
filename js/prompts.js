const promptList = [
    "What do I know to be true that I didn’t know a year ago?",
    "What distractions get in the way of being my most productive?",
    "When do I feel most in tune with myself?",
    "If someone described me, what would they say?",
    "What can wait until next week?",
    "How does every part of my body feel at this moment?",
    "Write down an entire list of what you are worried about. Star the items that you know are 100% true and not solely a feeling.",
    "List five things you are grateful for today and explain why.",
    "Describe a small act of kindness you witnessed or performed recently.",
    "Write about a new skill or hobby you would like to develop and why it interests you.",
    "Reflect on your long-term goals and break them down into actionable steps.",
    "List down a bucket list with the things that you have always wanted to do.",
    "Where do you see yourself in the next 1, 3, 5, 10 years from now?",
    "What is something that you would like to achieve? How do you plan on reaching your goal(s)?"
];

function loadPrompt() {
    const promptNum = Math.floor(Math.random() * promptList.length);
    document.getElementById("prompt").innerHTML = promptList[promptNum];
}
