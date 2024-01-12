import type { Connection } from '../protocol/connection';
import type { ContainerRoot } from './container-root';
export declare const installConnectionLossView: <O, U>(root: ContainerRoot, connection: Connection<O, U>) => () => void;
