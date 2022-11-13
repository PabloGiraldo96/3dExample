
body = document.getElementById('body');

function getRandomColor() {
	let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}
