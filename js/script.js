document.getElementById('about-toggle-button').addEventListener('click', toggleAboutMe)

function toggleAboutMe () {
	var a = document.getElementById('about-contend')
	var b = document.getElementById('timeline-content')
	a.classList.toggle('closed');
	b.classList.toggle('closed');
}

