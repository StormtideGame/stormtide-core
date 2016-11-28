// @flow

import { expect } from "chai";
import { GameDescriptor, RulesAuthority } from "stormtide-core";

describe("RulesAuthority", () => {
	it("should be constructable", () => {
		const settings = new GameDescriptor();
		const rules = new RulesAuthority(settings);

		expect(rules).to.be.ok;
	});

	it("should return a valid initial state", () => {
		const settings = new GameDescriptor();
		const rules = new RulesAuthority(settings);

		const state = rules.getInitialState();

		expect(state).to.be.an("object");
	});

	it("should throw on processAction", () => {
		const settings = new GameDescriptor();
		const rules = new RulesAuthority(settings);

		const using = () => {
			// Totally incorrect usage of processAction
			const any = (null: any);
			rules.processAction(any, any);
		};

		expect(using).to.throw(Error);
	});
});