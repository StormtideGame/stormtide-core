// @flow

import type { GameEntity } from "./GameEntity";
import generateId from "./generateId";

export type GameZoneType = "Unknown"|"Stack"|"Battlefield"|"Hand";

export default class GameZone {
	type: GameZoneType;
	entities: { [key: string]: ?GameEntity };
	id: string;

	constructor(data: $Shape<GameZone>) {
		this.type = "Unknown";
		this.entities = {};
		this.id = generateId();

		Object.assign(this, (data: any));
	}
}