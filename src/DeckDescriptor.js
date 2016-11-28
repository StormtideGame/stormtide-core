// @flow

import type CardDescriptor from "./CardDescriptor";

type RequiredProperties = {
	cards: CardDescriptor[]
};

export default class DeckDescriptor {
	cards: CardDescriptor[];

	constructor(data: RequiredProperties & $Shape<this>) {
		Object.assign(this, (data: Object));
	}
}