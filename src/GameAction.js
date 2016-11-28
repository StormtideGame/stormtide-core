// @flow

export type NothingAction = {
	type: "Nothing"
};

export type ConcedeAction = {
	type: "Concede",
	player: string
};

export type PassPriorityAction = {
	type: "PassPriority",
	player: string
};

export type GameAction =
	NothingAction |
	ConcedeAction |
	PassPriorityAction;