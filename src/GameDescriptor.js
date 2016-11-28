// @flow

import type { CardDescriptor } from "./CardDescriptor";
import type { PlayerDescriptor } from "./PlayerDescriptor";

type Mapish<V> = { [key: string]: ?V };

export default class GameDescriptor {
	players: PlayerDescriptor[] = [];
	cardPool: Mapish<CardDescriptor> = {};
}