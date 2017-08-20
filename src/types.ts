export interface Mapish<V> {
	[key: string]: V,
}

/** Represents any entity in the game itself. */
export interface Entity {
	id: string,
	timestamp: number,
	owner: string,
	controller: string,
}

/** Represents an entity with unknown properties, like a face-down card */
export interface UnknownEntity extends Entity {
}

/** Represnts an entity with known properties, like a card or token */
export interface KnownEntity extends Entity {
	supertypes: string[],
}

export interface Zone {
	id: string,
	debugName: string,
	ordered: boolean,
	entities: Mapish<Entity>,
}

export interface Effect {
	type: string,
}

export interface Action {
	issuer?: string,
	undoable: boolean,
	effects: Effect[],
}