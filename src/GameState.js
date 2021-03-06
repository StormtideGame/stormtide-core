// @flow

import type { PlayerState } from "./PlayerState";
import type { GameObject } from "./GameObject";
import type { GamePhase } from "./GamePhase";
import type { GameZone } from "./GameZone";

type Mapish<V> = {
	[key: string]: ?V
};

/**
 * Describes the game state from action to action.
 */
export type GameState = {
	players: Mapish<PlayerState>,
	playerTurnOrder: string[],

	zones: Mapish<GameZone>,
	entities: Mapish<GameObject>,

	priority: ?string,
	turn: ?string,
	phase: ?GamePhase
};