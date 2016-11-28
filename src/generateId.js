// @flow

import uuid from "uuid";

/**
 * Generates a portable ID for keeping track of entities.
 * Currently a wrapper around `uuid`, but this could change.
 */
export default function() {
	return uuid.v4();
}