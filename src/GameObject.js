// @flow

import type { CardDescriptor } from "./CardDescriptor";

export type CardEntity = {|
	isCard: true,
	descriptor: CardDescriptor,
	owner: string
|};

export type PermanentEntity = CardEntity & {|
	isPermanent: true,
	controller: string
|};

/**
 * Represents an entity in the game
 */
export type GameObject =
	PermanentEntity |
	CardEntity;