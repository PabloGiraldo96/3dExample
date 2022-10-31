
body = document.getElementById('body');

function getRandomColor() {
	let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}

function background() {
          body.style.color = getRandomColor();
		  body.style.transition = "all 0.5s ease";
			setTimeout(background, 2500);
      }

	background();