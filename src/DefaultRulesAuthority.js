// @flow

import RulesAuthority from "./RulesAuthority";
import generateId from "./generateId";
import Game from "./Game";

import type { PlayerState } from "./PlayerState";
import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

type Mapish<V> = { [key: string]: ?V };

/**
 * Provides a reasonable default rules enforcement engine.
 * This might be factored out into another module eventually.
 */
export default class DefaultRulesAuthority extends RulesAuthority {
	getInitialState(game: Game): GameState {
		const playerTurnOrder: string[] = [];
		const players: Mapish<PlayerState> = {};

		for (const descriptor of game.settings.players) {
			const id = generateId();

			players[id] = {
				descriptor,
				id
			};

			playerTurnOrder.push(id);
		}

		return {
			players,
			playerTurnOrder,
			priority: null,
			stack: []
		};
	}

	processAction(game: Game, action: GameAction): GameState {
		return game.state;
	}
}