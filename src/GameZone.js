// @flow

export type GameZoneType = "Unknown"|"Stack"|"Battlefield"|"Hand"|"Library";

export type GameZone = {
	type: GameZoneType,
	entities: string[],
	id: string
};