import SinglyLinkedList from "../../../data_structures/linked_list/single_linked_list";
import { List } from "../../../types";

export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
}

function printList(list: List<number>, expected: string = "") {
    let out: string = "expected: " + expected + "\n";
    for (let i = 0; i < list.length; ++i) {
        out += list.get(i);
        out += " ";
    }
    console.log(out);
}

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});
