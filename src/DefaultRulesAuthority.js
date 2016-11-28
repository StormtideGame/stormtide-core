// @flow

import RulesAuthority from "./RulesAuthority";
import generateId from "./generateId";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

export default class DefaultRulesAuthority extends RulesAuthority {
	getInitialState(): GameState {
		const players = {};

		for (const player of this.settings.players) {
			players[generateId()] = player;
		}

		return {
			players
		};
	}

	processAction(state: GameState, action: GameAction): GameState {
		return state;
	}
}