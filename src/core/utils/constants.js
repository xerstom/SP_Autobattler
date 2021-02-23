/* eslint-disable no-magic-numbers */
export const CONFIG = {
	AGENTS: 8, // 1 player, 7 bot
	TEMPLATE_CARDS: 30,
	GRID_SIZE: 14,
	MOVEMENT_POINTS: 3,
	
	REROLL_PRICE: 2,

	BASE_CARDS: 2,
	BASE_LIFE: 100,
	BASE_MONEY: 500,
	BASE_BOARD_PLACE: 2,
	
	MAX_BOARD_PLACE: 7,
	MAX_LEVEL: 3,
	MAX_BENCH_PLACE: 5,
	
	BASE_BOARD_UP_PRICE: 10,
	BASE_LEVEL_UP_PRICE: 10,
	BOARD_UP_MULTIPLIER: 1.4,
	LEVEL_UP_MULTIPLIER: 1.4,
};

export const LEVELS = [
	{
		minStat: 8,
		maxStat: 12,
		minAdaptative: 1,
		maxAdaptative: 3,
	},
	{
		minStat: 10,
		maxStat: 14,
		minAdaptative: 2,
		maxAdaptative: 6,
	},
	{
		minStat: 15,
		maxStat: 20,
		minAdaptative: 7,
		maxAdaptative: 8,
	},
];

export const LEVEL_PROPORTION = [
	0.55,
	0.30,
	0.15,
];

// Calculate incremented percentages for level proportion
export const LEVEL_INCR = LEVEL_PROPORTION.reduce( (acc, cur) => [
	...acc,
	acc.length > 0
		? parseFloat( (acc[acc.length - 1] + cur).toFixed(2) )
		: cur,
], [] );


export const COLORS = [
	"blue", // player
	"white",
	"orange",
	"pink",
	"brown",
	"teal",
	"purple",
	"cyan",
];

export const COLOR_HEX = {
	blue: "blue", // player
	white: "white",
	orange: "orange",
	pink: "pink",
	brown: "brown",
	teal: "teal",
	purple: "purple",
	cyan: "cyan",
};

export const displays = {
	0: { name: "Achille", img: "achille.jpg" },
	1: { name: "Gaya", img: "archere.jpg" },
	2: { name: "Ezio", img: "assassin.jpg" },
	3: { name: "Aupaq", img: "aupaq.jpg" },
	4: { name: "Shak", img: "big_shak.jpg" },
	5: { name: "Pecnor le Bourgmestre", img: "bourgmestre.jpg" },
	6: { name: "Brienne", img: "brienne.jpg" },
	7: { name: "Cender", img: "cender.jpg" },
	8: { name: "Keiran", img: "chevalier.jpg" },
	9: { name: "Dalane", img: "dalane.jpg" },
	10: { name: "Django", img: "django.jpg" },
	11: { name: "Emperor Pal", img: "emperor_pal.jpg" },
	12: { name: "Gall", img: "gall.jpg" },
	13: { name: "itilldo", img: "itilldo.jpg" },
	14: { name: "Jacksu", img: "jacksu.jpg" },
	15: { name: "Joker", img: "joker.jpg" },
	16: { name: "Kagette", img: "kagette.jpg" },
	17: { name: "Klean", img: "klean.jpg" },
	18: { name: "Loudebrok", img: "loudebrok.jpg" },
	19: { name: "Naxla", img: "Naxla.jpg" },
	20: { name: "Necro", img: "necromancer.jpg" },
	21: { name: "Neterau", img: "neterau.jpg" },
	22: { name: "Nocassio", img: "nocassio.jpg" },
	23: { name: "Reginne", img: "reginne.jpg" },
	24: { name: "Remi Sterieu", img: "remi_sterieu.jpg" },
	25: { name: "Salome", img: "salome.jpg" },
	26: { name: "Sossi-Al", img: "satire.jpg" },
	27: { name: "Ungree", img: "ungree.jpg" },
	28: { name: "Yoshima", img: "Yoshima.jpg" },
	29: { name: "Zomou", img: "zomou.jpg" },
};
// 28 : {name:"Voldefoy",img:"voldefoy.jpg"},


