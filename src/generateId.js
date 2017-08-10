import uuid from "uuid";

/**
 * Generates a portable ID for keeping track of entities.
 */
export default function() {
	return uuid.v4();
}