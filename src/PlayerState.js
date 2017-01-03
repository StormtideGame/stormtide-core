// @flow

import type { PlayerDescriptor } from "./PlayerDescriptor";
import generateId from "./generateId";

/**
 * Mutable state object representing a player in a game.
 */
export default class PlayerState {
	// The player's immutable descriptor
	descriptor: PlayerDescriptor;

	// The UUID of the player
	id: string;

	constructor(data: $Shape<PlayerState>) {
		this.id = generateId();

		Object.assign(this, (data: any));
	}
}