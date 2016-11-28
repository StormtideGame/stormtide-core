// @flow

import type { PlayerState } from "./PlayerState";

type Mapish<V> = {
	[key: string]: ?V
};

/**
 * Describes the game state from action to action.
 */
export type GameState = {
	players: Mapish<PlayerState>
};