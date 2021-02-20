/* eslint-disable no-magic-numbers */
export const CONFIG = {
	AGENTS: 8, // 1 player, 7 bot
	TEMPLATE_CARDS: 30,
	BASE_CARDS: 3,
	GRID_SIZE: 14,
	REROLL_PRICE: 2,
	MOVEMENT_POINTS: 3,
	BASE_LIFE: 100,
	BASE_MONEY: 500,
	BOARD_PLACE: 5,
	BENCH_PLACE: 7,
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
	blue: "ffffff", // player
	white: "ffffff",
	orange: "ffffff",
	pink: "ffffff",
	brown: "ffffff",
	teal: "ffffff",
	purple: "ffffff",
	cyan: "ffffff",
};
