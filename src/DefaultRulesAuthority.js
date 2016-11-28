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
 *
 * Helpful resource: http://media.wizards.com/2016/docs/MagicCompRules_20161111.pdf
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
			turn: null,
			priority: null,
			phase: null,
			stack: []
		};
	}

	_startGame(game: Game) {
		// TODO: draw opening hands

		game.state.turn = game.state.playerTurnOrder[0];
		game.state.priority = game.state.playerTurnOrder[0];
		game.state.phase = "Main1";
	}

	processAction(game: Game, action: GameAction): GameState {
		switch (action.type) {
			case "GameStart":
				this._startGame(game);
				break;
		}

		return game.state;
	}
}