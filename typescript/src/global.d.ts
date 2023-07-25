declare type Point = {
    x: number;
    y: number;
}

declare type CompleteGraphEdge = { from: number; to: number; weight: number };
declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][]; // A number means weight

declare type AdjacencyList = number[][];
declare type AdjacencyMatrix = number[][]; // A 1 means connected

declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

declare type GeneralNode<T> = {
    value: T;
    children: GeneralNode<T>[];
};

declare interface ILRU<K, V> {
    update(key: K, value: V): void;
    get(key: K): V | undefined;
}
