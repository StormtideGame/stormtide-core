// @flow

import type { CardDescriptor } from "./CardDescriptor";

/**
 * A representation of a deck's contents
 */
export type DeckDescriptor = {
	cards: CardDescriptor[]
};