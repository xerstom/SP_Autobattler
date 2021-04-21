export const bgColor = (x, y, agents, gInterface, selectedBox) => {
	const colors = [];
	const fAgents = agents.filter(a => a.position.x === x && a.position.y === y);

	if (fAgents?.length > 0) {
		fAgents.forEach( (a) => colors.push(a.color) );
	}
	
	if (colors.length === 0) {
		if (gInterface.willBeDisabled(x, y) ) {
			return ["yellow"];
		}
		
		if (selectedBox?.x === x && selectedBox?.y === y) {
			return ["green"];
		}
	}
	return colors.length !== 0 ? colors : ["gray"];
};

export const activeColors = (x, y, gInterface, selectedBox) => {
	const colors = [];
	if (gInterface.willBeDisabled(x, y) ) {
		colors.push("yellow");
	}
	if (selectedBox?.x === x && selectedBox?.y === y) {
		colors.push("green");
	}
	return colors.length !== 0 ? colors : ["black"];
};
