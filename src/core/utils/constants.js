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
