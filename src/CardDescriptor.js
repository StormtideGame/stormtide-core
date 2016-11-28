// @flow

type RequiredProperties = {
	name: string
};

export default class CardDescriptor {
	name: string;

	constructor(data: RequiredProperties & $Shape<this>) {
		Object.assign(this, (data: Object));
	}
}