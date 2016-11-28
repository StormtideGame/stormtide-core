// @flow

import type { DeckDescriptor } from "./DeckDescriptor";

/**
 * Describes a player's immutable properties
 */
export type PlayerDescriptor = {
	deck: DeckDescriptor
};