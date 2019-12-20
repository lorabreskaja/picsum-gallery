
function getImages(){
	fetch('https://picsum.photos/v2/list')
	.then((res) => res.json())
	.then((data) => {
		let output = '<p>Lorem Picsum gallery</p>';
		data.forEach(function(item) {
			output += `     
			<div id="display">
				<img class="thumbnail" src="${item.download_url}" alt="${item.author} ${item.width} × ${item.height}">
			</div>
			`;
		});

		document.getElementById('output').innerHTML = output;

		const display = document.querySelectorAll('#display');
		const currentImg = document.querySelector('#currentImg');
		const currentInfo = document.querySelector('#currentInfo');

		display.forEach(thumb => thumb.addEventListener('click', e => {
			currentImg.src = e.target.src;
			currentInfo.innerHTML = e.target.alt; 		
		}));
	});	
};

getImages();




