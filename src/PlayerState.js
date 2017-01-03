// @flow

import type { PlayerDescriptor } from "./PlayerDescriptor";

export type PlayerState = {
	// The player's immutable descriptor
	descriptor: PlayerDescriptor;

	// The UUID of the player
	id: string;
};