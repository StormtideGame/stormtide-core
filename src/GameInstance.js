import type { GameDescriptor, GameState, PlayerDescriptor, PlayerState } from "./types";

const newPlayer = (descriptor: PlayerDescriptor): PlayerState => ({
	descriptor,
	id: descriptor.id,
});

// Having to implement because of flow makes me grumpy.
function entries<T>(map: { [string]: T }): [[string, T]] {
	return (Object.entries(map): any);
}

export default class GameInstance {
	descriptor: GameDescriptor;
	state: GameState;

	constructor(descriptor: GameDescriptor) {
		this.descriptor = descriptor;

		const players = {};

		for (const [id, player] of entries(descriptor.players)) {
			players[id] = newPlayer(player);
		}

		this.state = {
			players
		};
	}
}