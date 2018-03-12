var starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.co/api/people') 
	.then(function(response) {   
		return response.json(); 
	})
	.then(function(json) {
		let people = json.results; 
		/* for(p of people) {
			console.log(p);
		}; // ^^^ for...of gives us the objects in our console.log */
		/* for(p in people){
			console.log(p);
		} // ^^^ for...in just console logs numbers? That's because for...in is only grabbing the property, which in an array is the index, so we see 0-9 */
		for(p of people) {
			let listItem = document.createElement('li'); 
			listItem.innerHTML = '<p>' + p.name + 'hey' + '</p>';  
			starWarsPeopleList.appendChild(listItem);  
		}
	});