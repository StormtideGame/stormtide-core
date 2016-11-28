// @flow

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

export default class RulesAuthority {
	getInitialState(): GameState {
		return {
			players: {}
		};
	}

	processAction(state: GameState, action: GameAction): GameState {
		throw new Error("processAction is not implemented");
	}
}