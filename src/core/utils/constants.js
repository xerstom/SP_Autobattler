/* eslint-disable no-magic-numbers */

/**
 * Game configuration
 */
export const CONFIG = {
	AGENTS: 8, // 1 player, 7 bot
	TEMPLATE_CARDS: 30,
	GRID_SIZE: 14,
	MOVEMENT_POINTS: 3, // number of deplacement point
	GRID_SHRINK_RATE: 2, // number of turn for the grid to reduce

	REROLL_PRICE: 2, // reroll cost

	MONEY_PER_TURN: 5, // money earned per turn
	MONEY_PER_COMBAT: 20, // money to split per combat

	DAMAGE_PER_CARD: 5, // damage to deal per card at the end of battles

	BASE_CARDS: 2, // number of card on the board when starting
	BASE_LIFE: 100, // life when starting
	BASE_MONEY: 10, // money when starting
	BASE_BOARD_PLACE: 2, // board size when starting

	MAX_BOARD_PLACE: 7, // maximum board size
	MAX_LEVEL: 3, // maximum level
	MAX_BENCH_PLACE: 5, // maximum bench size

	BUFF_PERCENTAGE: 0.3, // percentage pf stats a card get when buffed

	BASE_BOARD_UP_PRICE: 20, // starting price to board up
	BASE_LEVEL_UP_PRICE: 25, // starting price to level up
	BOARD_UP_MULTIPLIER: 1.7, // money to board up
	LEVEL_UP_MULTIPLIER: 2, // money to level up
};

/**
 * Level repartition
 */
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

/**
 * Level percentage
 */
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

/**
 * Possible colors for all agents (names)
 */
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

/**
 * Display colors used in the frontend
 */
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

/**
 * Display images
 */
export const displays = [
	{ name: "Achille", img: "achille.jpg" },
	{ name: "Gaya", img: "archere.jpg" },
	{ name: "Arlekin", img: "arlekin.jpg" },
	{ name: "Ezio", img: "assassin.jpg" },
	{ name: "Aupaq", img: "aupaq.jpg" },
	{ name: "Big Shaq", img: "big_shaq.jpg" },
	{ name: "Bourgmestre", img: "bourgmestre.jpg" },
	{ name: "Brienne", img: "brienne.jpg" },
	{ name: "Cender", img: "cender.jpg" },
	{ name: "Keiran", img: "chevalier.jpg" },
	{ name: "Dalane", img: "dalane.jpg" },
	{ name: "Django", img: "django.jpg" },
	{ name: "Emperor Pal", img: "emperor_pal.jpg" },
	{ name: "Gall", img: "gall.jpg" },
	{ name: "itilldo", img: "itilldo.jpg" },
	{ name: "Jacksu", img: "jacksu.jpg" },
	{ name: "Fun Joahnes", img: "joahnes.jpg" },
	{ name: "Joker", img: "joker.jpg" },
	{ name: "Kagette", img: "kagette.jpg" },
	{ name: "Klean", img: "klean.jpg" },
	{ name: "Loudebrok", img: "loudebrok.jpg" },
	{ name: "Neterau", img: "neterau.jpg" },
	{ name: "Nocassio", img: "nocassio.jpg" },
	{ name: "Reginne", img: "reginne.jpg" },
	{ name: "Remi Sterieu", img: "remi_sterieu.jpg" },
	{ name: "Salome", img: "salome.jpg" },
	{ name: "Sossi-Al", img: "satire.jpg" },
	{ name: "Ungree", img: "ungree.jpg" },
	{ name: "Yoshima", img: "yoshima.jpg" },
	{ name: "Voldefoy", img: "voldefoy.jpg" },
	{ name: "Zomou", img: "zomou.jpg" },

];
// 28 :


