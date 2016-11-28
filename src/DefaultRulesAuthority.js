// @flow

import RulesAuthority from "./RulesAuthority";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

export default class DefaultRulesAuthority extends RulesAuthority {
	processAction(state: GameState, action: GameAction): GameState {
		return state;
	}
}