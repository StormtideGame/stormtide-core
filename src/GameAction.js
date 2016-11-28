// @flow

export type NothingAction = {
	type: "Nothing"
};

export type GameStartAction = {
	type: "GameStart"
};

export type ConcedeAction = {
	type: "Concede",
	player: string
};

export type PassPriorityAction = {
	type: "PassPriority",
	player: string
};

/**
 * Represents an action that mutates the game's state.
 */
export type GameAction =
	NothingAction |
	GameStartAction |
	ConcedeAction |
	PassPriorityAction;