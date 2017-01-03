// @flow

import RulesAuthority from "./RulesAuthority";
import generateId from "./generateId";
import Game from "./Game";

import type { PlayerState } from "./PlayerState";
import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";
import type { GameZoneType } from "./GameZone";

type Mapish<V> = { [key: string]: ?V };

/**
 * Provides a reasonable default rules enforcement engine.
 * This might be factored out into another module eventually.
 *
 * Helpful resource: http://media.wizards.com/2016/docs/MagicCompRules_20161111.pdf
 */
export default class DefaultRulesAuthority extends RulesAuthority {
	_addZone(state: GameState, type: GameZoneType): string {
		const id = generateId();

		state.zones[id] = {
			id,
			type,
			entities: []
		};

		return id;
	}

	getInitialState(game: Game): GameState {
		const playerTurnOrder: string[] = [];
		const players: Mapish<PlayerState> = {};

		const state: GameState = {
			players,
			playerTurnOrder,
			turn: null,
			priority: null,
			phase: null,
			stack: [],
			zones: {},
			entities: {}
		};

		for (const descriptor of game.settings.players) {
			const handZone = this._addZone(state, "Hand");
			const libraryZone = this._addZone(state, "Library");

			const player = {
				id: generateId(),
				descriptor,
				handZone,
				libraryZone
			};

			players[player.id] = player;
			playerTurnOrder.push(player.id);
		}

		this._addZone(state, "Stack");
		this._addZone(state, "Battlefield");

		return state;
	}

	_startGame(game: Game) {
		game.state.turn = game.state.playerTurnOrder[0];
		game.state.priority = game.state.playerTurnOrder[0];
		game.state.phase = "Untap";
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