# find-data

This is useful when you are working with a poorly documented API and want to find out how it is storing a given piece of data.

Examples:

var a = {
	hello: {
		best: [
			"apple",
			"friend",
			"toad"
		],
		other: 2,
		nope: function(){

		}
	},
	is: "this",
	friend: {
		has: "options"
		including: {
			other: "friends"
		}
	}
};

console.log(JSON.stringify(find('friend', a), null, 2));

{
	hello: {
		best: [
			null,
			"friend",
			null
		],
	},
	friend: {
		including: {
			other: "friends"
		}
	}
};
