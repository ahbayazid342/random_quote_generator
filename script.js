const quoteBtn = document.querySelector('.btn');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.name');
const soundBtn = document.querySelector('.soundBtn');
const copyBtn = document.querySelector('.copyBtn');
const fbBtn = document.querySelector('.fbBtn');

function randomQuote() {
	fetch('https://api.quotable.io/random')
		.then((res) => res.json())
		.then((result) => {
			console.log(result);
			quoteText.innerHTML = result.content;
			authorText.innerHTML = result.author;
		});
}

quoteBtn.addEventListener('click', randomQuote);

soundBtn.addEventListener('click', () => {
	let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML}`);
	speechSynthesis.speak(utterance);
	console.log('hell');
});

copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(`${quoteText.innerHTML}`);
});

fbBtn.addEventListener('click', () => {
	let post = `https://www.facebook.com/intent?url=${quoteText.innerHTML}`;
	window.open(post, '_blank');
});
