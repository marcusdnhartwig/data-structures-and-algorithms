'use string';

//let { LinkedList } = require('../linkedlist');
let { LinkedList } = require('../linkedlist');
let linkedList = new LinkedList();

describe('Linked List Tests', () => {
  test('Can Instantiate An Empty Linked List', () => {
    expect(linkedList.head).toBeNull();
  })
  test('CAN Insert Into Linked List', () => {
    const list = new LinkedList();
    list.append('node');
    expect(list.head.value).toEqual('node');
    // linkedList.instertAtHead(1);
    // linkedList.instertAtHead('a');
    // linkedList.instertAtHead('Naruto');
    // expect(linkedList.head.value).toEqual('Naruto');
    // expect(linkedList.head.next.value).toEqual('a');
    // expect(linkedList.head.next.next.value).toEqual(1);
    // expect(linkedList.head.next.next.next).toBeNull();
  })

  test('The Head Property WILL Point to the First NODE in Linked List', () => {
    const list = new LinkedList();
    list.append('part');
    expect(list.head.next).toEqual(null);
    // expect(linkedList.head.value).toEqual('Naruto');
  })

  test('CAN Insert Multiple NODES into Linked List', () => {
    const list = new LinkedList();
    list.append('PartOne');
    list.append('PartTwo');
    list.append('AIRBORNE');
    //list.append('poop');
    expect(list.head.next.next.value).toEqual('AIRBORNE');
  })

  test('Will Return TRUE when Finding Value w/in Existing Linked List', () => {
    const list = new LinkedList();
    list.append('PartOne');
    list.append('PartTwo');
    list.append('AIRBORNE');

    let result = list.includes('PartOne');
    let result2 = list.includes('PartTwo');
    expect(result).toBeTruthy();
    expect(result2).toBeTruthy();
  })

  test('Will Return FALSE when Searching for Value w/in Linked List that does NOT Exist', () => {
    const list = new LinkedList();
    list.append('PartOne');
    list.append('PartTwo');
    list.append('AIRBORNE');

    let result = linkedList.includes('James Spader');
    let result2 = linkedList.includes('Mad Titan Thanos');
    expect(result).toBeFalsy();
    expect(result2).toBeFalsy();
  })

  test('CAN Return Collection of ALL VALUES that Exist w/in Linked List', () => {
    let emptyArray = [];
    const list = new LinkedList();
    list.append('PartOne');
    list.append('PartTwo');
    list.append('AIRBORNE');

    emptyArray.push(list);
    // let result = list.toString();
    // let expected = '{AIRBORNE} -> {PartTwo} -> {PartOne} -> {Naruto} -> {a} -> {1} -> NULL';
    expect(emptyArray).toEqual([list]);
  })

  test('CAN Return Value & Node KTH from End of List', () => {
    const list = new LinkedList();
    list.append('PartOne');
    list.append('PartTwo');
    list.append('AIRBORNE');

    let result = list.kthFromEnd(2);
    console.log(result);
    expect(result).toEqual('PartOne');
    let resultTwo = list.kthFromEnd(1);
    expect(resultTwo).toEqual('PartTwo');
    let resultThree = console.log(list.kthFromEnd(20));
    expect(resultThree).toBeFalsy();
  })
  test('CAN Zipper Two Linked Lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const zipped = new LinkedList();

    list1.append(1);
    list1.append(3);
    list1.append(2);

    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zipperedList = zipped.zipLists(list1, list2);

    expect(zipperedList.head.value).toEqual(1);
    expect(zipperedList.head.next.value).toEqual(5);
    expect(zipperedList.head.next.next.value).toEqual(3);
    expect(zipperedList.head.next.next.next.value).toEqual(9);
    expect(zipperedList.head.next.next.next.next.value).toEqual(2);
    expect(zipperedList.head.next.next.next.next.next.value).toEqual(4);
    expect(zipperedList.head.next.next.next.next.next.next).toEqual(null);
  });
})

