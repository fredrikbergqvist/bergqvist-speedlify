module.exports = {
	name: "Bergqvist.it",
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 60 * 23, // 24 hours
	},
	urls: [
		"https://www.bergqvist.it/",
		"https://www.bergqvist.it/resume/",
		"https://www.bergqvist.it/portfolio/"
	]
};
