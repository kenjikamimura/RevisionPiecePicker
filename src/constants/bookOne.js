const bookOne = [
	{
		bookOrder: 1,
		name: 'Twinkles',
	},
	{
		bookOrder: 2,
		name: 'Lightly Row',
	},
	{
		bookOrder: 3,
		name: 'Song of the Wind',
	},
	{
		bookOrder: 4,
		name: 'Go Tell Aunt Rhody',
	},
	{
		bookOrder: 5,
		name: 'O Come Little Children',
	},
	{
		bookOrder: 6,
		name: 'May Song',
	},
	{
		bookOrder: 7,
		name: 'Long Long Ago',
	},
	{
		bookOrder: 8,
		name: 'Allegro',
	},
	{
		bookOrder: 9,
		name: 'Perpetual Motion',
	},
	{
		bookOrder: 10,
		name: 'Allegretto',
	},
	{
		bookOrder: 11,
		name: 'Andantino',
	},
	{
		bookOrder: 12,
		name: 'Etude',
	},
	{
		bookOrder: 13,
		name: 'Minuet 1',
	},
	{
		bookOrder: 14,
		name: 'Minuet 2',
	},
	{
		bookOrder: 15,
		name: 'Minuet 3',
	},
	{
		bookOrder: 16,
		name: 'Happy Farmer',
	},

	{
		bookOrder: 17,
		name: 'Gavotte',
	},
];

export let bookOneAsObject = {};
bookOne.forEach(piece => {
	bookOneAsObject[piece.name] = 'kenji';
});

console.log(bookOneAsObject);

export default bookOne;
