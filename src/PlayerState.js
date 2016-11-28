// @flow

import type { PlayerDescriptor } from "./PlayerDescriptor";

/**
 * Mutable state object representing a player in a game.
 */
export type PlayerState = {
	// The player's immutable descriptor
	descriptor: PlayerDescriptor,

	// The UUID of the player
	id: string
};