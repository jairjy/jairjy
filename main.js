const windows = [];
const icons = [];
windows.push(document.getElementById('profile'));
windows.push(document.getElementById('resume'));
windows.push(document.getElementById('education'));
windows.push(document.getElementById('projects'));
windows.push(document.getElementById('portfolio'));

// test

icons.push(document.getElementById('profile-icon'));
icons.push(document.getElementById('experience-icon'));
icons.push(document.getElementById('education-icon'));
icons.push(document.getElementById('projects-icon'));
icons.push(document.getElementById('portofolio-icon'));

const hideall = () => {
	windows.forEach((item, index) => {
		const element = item;
		const border = icons[index];
		element.style.display = 'none';
		border.style.border = 'thin none white';
	});
};

const show = (number) => {
	hideall();
	windows[number].style.display = 'block';
	icons[number].style.border = 'thin solid white';
};

document.getElementById('icopic-profile').onclick = () => show(0);
document.getElementById('icopic-experience').onclick = () => show(1);
document.getElementById('icopic-education').onclick = () => show(2);
document.getElementById('icopic-projects').onclick = () => show(3);
document.getElementById('icopic-portofolio').onclick = () => show(4);

document.getElementById('profile').style.display = 'block';
