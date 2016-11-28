// @flow

/**
 * Describes the properties of an individual card. Used as a template for all
 * cards of a given type and characteristics
 *
 * Examples:
 * - Forest (4th Edition, Art A)
 * - Stormtide Leviathan (Eternal Masters, Foil)
 */
export type CardDescriptor = {
	name: string
};