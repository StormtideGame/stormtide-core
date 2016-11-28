// @flow

import RulesAuthority from "./RulesAuthority";
import generateId from "./generateId";

import type { PlayerState } from "./PlayerState";
import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

/**
 * Provides a reasonable default rules enforcement engine.
 * This might be factored out into another module eventually.
 */
export default class DefaultRulesAuthority extends RulesAuthority {
	getInitialState(): GameState {
		const players: { [key: string]: ?PlayerState } = {};

		for (const descriptor of this.settings.players) {
			const id = generateId();

			players[id] = {
				descriptor,
				id
			};
		}

		return {
			players
		};
	}

	processAction(state: GameState, action: GameAction): GameState {
		return state;
	}
}