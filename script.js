let name = prompt ('Name a person')
let place = prompt ('Name a place')
let adjective = ["Long", 'young', 'bad']
let plural = ['babies', 'buses', 'dwarves']

document.write('Last summer, my mom and dad took me and' 
	+ ' ' + name + ' ' + 'on a trip to' + ' ' + place 
	+ '.' + 'The weather there is very' 
	+ ' ' + adjective[Math.floor(adjective.lenght*Math.random())]  + '!' 
	+ ' ' + 'Northeren' + ' ' + place + ' ' + 'has many' 
	+ ' ' + plural[Math.floor(plural.lenght*Math.random())] + ', and they make' 
	+ ' ' + adjective[Math.floor(adjective.lenght*Math.random())] 
	+ ' ' + plural[Math.floor(plural.lenght*Math.random())] + ' there.'
	)



