let name = prompt ('Name a person')
let place = prompt ('Name a place')
let adjective = ['long', 'young', 'bad']
let plural = ['babies', 'buses', 'dwarves']


document.write('Last summer, my mom and dad took me and' 
	+ ' ' + name + ' ' + 'on a trip to' + ' ' + place 
	+ '.' + 'The weather there is very' 
	+ ' ' + adjective [Math.floor(adjective.length*Math.random())] + '!' 
	+ ' ' + 'Northeren' + ' ' + place + ' ' + 'has many' 
	+ ' ' + plural[Math.floor(plural.length*Math.random())] + ', and they make' 
	+ ' ' + adjective[Math.floor(adjective.length*Math.random())] 
	+ ' ' + plural[Math.floor(plural.length*Math.random())] + ' there.'
	);



