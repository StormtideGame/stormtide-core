// @flow

import type { PlayerDescriptor } from "./PlayerDescriptor";

export type PlayerState = {
	// The player's immutable descriptor
	descriptor: PlayerDescriptor,

	// The UUID of the player
	id: string,

	// The ID of the zone of this player's hand
	handZone: string,

	// The ID of the zone of this player's library
	libraryZone: string
};