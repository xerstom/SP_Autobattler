export const bgColor = (i, j, agents, gInterface, selectedBox) => {
	const colors = [];
	const fAgents = agents.filter(a => a.position.x === i && a.position.y === j);

	if (fAgents?.length > 0) {
		fAgents.forEach( (a) => colors.push(a.color) );
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
