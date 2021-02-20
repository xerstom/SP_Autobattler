export const bgColor = (i, j, gInterface, selectedBox) => {
	const colors = [];
	const agents = gInterface.getBots().filter(a => a.position.x === i && a.position.y === j);

	if (agents?.length > 0) {
		agents.forEach( (a) => colors.push(a.color) );
	}
	if (gInterface.getPlayer().position.x === i && gInterface.getPlayer().position.y === j) {
		colors.push("blue");
	}
	
	if (colors.length === 0) {
		if (gInterface.willBeDisabled(i, j) ) {
			return ["yellow"];
		}
		
		if (selectedBox?.x === i && selectedBox?.y === j) {
			return ["green"];
		}
	}
	return colors.length !== 0 ? colors : ["gray"];
};

export const activeColors = (i, j, gInterface, selectedBox) => {
	const colors = [];
	if (gInterface.willBeDisabled(i, j) ) {
		colors.push("yellow");
	}
	if (selectedBox?.x === i && selectedBox?.y === j) {
		colors.push("green");
	}
	return colors.length !== 0 ? colors : ["black"];
};
