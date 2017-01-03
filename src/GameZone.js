// @flow

import type { GameEntity } from "./GameEntity";

export type GameZoneType = "Unknown"|"Stack"|"Battlefield"|"Hand";

export type GameZone = {
	type: GameZoneType;
	entities: { [key: string]: ?GameEntity };
	id: string;
};