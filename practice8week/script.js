let originalParagraph = document.getElementById("paragraph").innerHTML;

function runTask(taskNumber) {
    const paragraph = document.getElementById("paragraph");
    let text = paragraph.innerHTML;

    switch (taskNumber) {
        case 1:
            const words = text.split(' ');
            const highlightedText = words.map(word => word.length > 8 ? `<span class="highlight">${word}</span>` : word).join(' ');
            paragraph.innerHTML = highlightedText;
            break;

        case 2:
            const sourceLink = document.createElement("a");
            sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
            sourceLink.textContent = "Source of the text";
            paragraph.appendChild(document.createElement("br"));
            paragraph.appendChild(sourceLink);
            break;

        case 3:
            const sentences = text.split('.').filter(Boolean);
            const splitText = sentences.map(sentence => sentence.trim() + '.<br>').join('');
            paragraph.innerHTML = splitText;
            break;

        case 4:
            const wordCount = text.split(' ').length;
            document.getElementById("wordCount").textContent = `Word count: ${wordCount}`;
            break;

        case 5:
            let replacedText = text.replace(/\?/g, '🤔').replace(/!/g, '😲');
            paragraph.innerHTML = replacedText;
            break;

        default:
            break;
    }
}

function restart() {
    document.getElementById("paragraph").innerHTML = originalParagraph;
    document.getElementById("wordCount").textContent = '';
}
