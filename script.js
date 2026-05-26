const typeTextColored = async function (text, colors, delayMs, ...elements) {
	const words = text.split(' ');
	elements.forEach(element => {
		element.innerHTML = '';
		words.forEach((word, wi) => {
			if (wi > 0) element.appendChild(document.createTextNode(' '));
			const wordSpan = document.createElement('span');
			wordSpan.style.color = colors[wi % colors.length];
			for (const char of word) {
				const charSpan = document.createElement('span');
				charSpan.textContent = char;
				charSpan.style.opacity = '0';
				charSpan.style.transition = 'opacity 0.15s linear';
				wordSpan.appendChild(charSpan);
			}
			element.appendChild(wordSpan);
		});
	});

	const charSpanSets = elements.map(el => [...el.querySelectorAll('span > span')]);
	const len = Math.max(...charSpanSets.map(s => s.length));
	for (let i = 0; i < len; i++) {
		requestAnimationFrame(() => {
			charSpanSets.forEach(spans => { if (spans[i]) spans[i].style.opacity = '1'; });
		});
		await new Promise(resolve => setTimeout(resolve, delayMs));
	}
};
async function typeText (text, delayMs, ...elements) {
	const lineBreakDelayMs = 400;

	const lines = Array.isArray(text) ? text : [text];
	const totalChars = lines.reduce((sum, line) => sum + line.length, 0);

	elements.forEach(element => {
		element.innerHTML = '';
		lines.forEach((line, li) => {
			if (li > 0) element.appendChild(document.createElement('br'));
			for (const char of line) {
				if (char === '|') {
					element.appendChild(document.createElement('wbr'));
					continue;
				}
				const span = document.createElement('span');
				span.textContent = char;
				span.style.opacity = '0';
				span.style.transition = 'opacity 0.15s linear';
				element.appendChild(span);
			}
		});
	});

	const spanSets = elements.map(el => [...el.querySelectorAll('span')]);

	const lineEndIndices = new Set();
	let acc = 0;
	for (let li = 0; li < lines.length - 1; li++) {
		acc += lines[li].length;
		lineEndIndices.add(acc - 1);
	}

	for (let i = 0; i < totalChars; i++) {
		const index = i;
		requestAnimationFrame(() => {
			spanSets.forEach(spans => spans[index].style.opacity = '1');
		});
		await new Promise(resolve => setTimeout(resolve, delayMs));
		if (lineEndIndices.has(i)) {
			await new Promise(resolve => setTimeout(resolve, lineBreakDelayMs));
		}
	}
}
const deleteText = async function (delayMs, ...elements) {
	const spanSets = elements.map(el => [...el.querySelectorAll('span')]);

	const maxLen = Math.max(...spanSets.map(s => s.length));
	for (let i = maxLen - 1; i >= 0; i--) {
		const index = i;
		requestAnimationFrame(() => {
			spanSets.forEach(spans => { if (spans[index]) spans[index].style.opacity = '0'; });
		});
		await new Promise(resolve => setTimeout(resolve, delayMs));
	}

	elements.forEach(element => { element.innerHTML = ''; });
}

const title = document.getElementById('title');
const splash = document.getElementById('splash');
await new Promise(resolve => setTimeout(resolve, 600));
await typeText(['Against the dark,', 'a tall white fountain played.'], 100, splash);
await new Promise(resolve => setTimeout(resolve, 2000));
document.body.classList.add('show-title');
await new Promise(resolve => setTimeout(resolve, 800));

const gameLinks = [...document.querySelectorAll('#game-links a')];
for (const link of gameLinks) {
	link.classList.add('visible');
	await new Promise(resolve => setTimeout(resolve, 150));
}