export type Id = string;

export type PlayerDescriptor = {
	id: Id,
};

export type PlayerState = {
	descriptor: PlayerDescriptor,
	id: Id,
};

export type Action = {
	type: "concede",
	player: Id,
} | {
	type: "pass_priority",
	player: Id,
};

export type GameDescriptor = {
	players: { [Id]: PlayerDescriptor },
};

export type GameState = {
	players: { [Id]: PlayerState },
};