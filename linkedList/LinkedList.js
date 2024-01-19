class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    get(index) {
        const node = this._getNodeAtIndex(index);
        if (!node) {
            return -1;
        }
        return node.value;
    }

    _getNodeAtIndex(index) {
        let i = 0;
        let head = this.head;
        while (head) {
            if (i === index) {
                return head;
            }
            i++;
            head = head.next;
        }
        return null;
    }

    addAtHead(value) {
        if (!this.head && !this.tail) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
            return this;
        }
        const prev = this.head;
        this.head = new LinkedListNode(value, prev);
        if (prev.next === null) {
            this.tail = prev;
        }
        return this;
    }

    addAtTail(value) {
        if (!this.head && !this.tail) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
            return this;
        }
        const prev = this.tail;
        this.tail = new LinkedListNode(value);
        prev.next = this.tail;
        return this;
    }

    addAtIndex(index, value) {
        if (index === 0) {
            this.addAtHead(value);
            return this;
        }
        const node = this._getNodeAtIndex(index);
        const prev = this._getNodeAtIndex(index - 1);

        if (node === null && prev === null) {
            return this;
        }
        if (node === null) {
            this.addAtTail(value);
            return this;
        }
        prev.next = new LinkedListNode(value, node);
        return this;
    }

    deleteAtIndex(index) {
        if (index === 0) {
            this.head = this.head.next;
            return this;
        }
        const prev = this._getNodeAtIndex(index - 1);
        if (prev) {
            prev.next = this._getNodeAtIndex(index + 1);
            if (prev.next === null) {
                this.tail = prev;
            }
        }
        return this;
    }

    toArray() {
        let head = this.head;
        let nodes = [];

        while (head) {
            nodes.push(head.value);
            head = head.next;
        }

        return nodes;
    }
}

const list = new LinkedList();

list.addAtHead(84);
list.addAtTail(2);
list.addAtTail(39);
list.get(3);
list.get(1);
list.addAtTail(42);
list.addAtIndex(1, 80);
list.addAtHead(14);
list.addAtHead(1);

list.addAtTail(53);
list.addAtTail(98);
list.addAtTail(19);
list.addAtTail(12);
list.get(2);
list.addAtHead(16);
list.addAtHead(33);
list.addAtIndex(4, 17);
list.addAtIndex(6, 8);
list.addAtHead(37);
list.addAtTail(43);
list.deleteAtIndex(11);
list.addAtHead(80);
list.addAtHead(31);
list.addAtIndex(13, 23);
list.addAtTail(17);
list.get(4);
list.addAtIndex(10, 0);
list.addAtTail(21);
list.addAtHead(73);
list.addAtHead(22);
list.addAtIndex(24, 37);
list.addAtTail(14);
list.addAtHead(97);
list.addAtHead(8);
list.get(6);
list.deleteAtIndex(17);
list.addAtTail(50);
list.addAtTail(28);
list.addAtHead(76);
list.addAtTail(79);
list.get(18);
list.deleteAtIndex(30); //issue
list.addAtTail(5);
list.addAtHead(9);
list.addAtTail(83);
console.log(list.toArray());

list.deleteAtIndex(3);
list.addAtTail(40);
list.deleteAtIndex(26);
list.addAtIndex(20, 90);
list.deleteAtIndex(30);
list.addAtTail(40);
list.addAtHead(56);
list.addAtIndex(15, 23);
list.addAtHead(51);
list.addAtHead(21);
list.get(26);
list.addAtHead(83);
list.get(30);
list.addAtHead(12);
list.deleteAtIndex(8);
list.get(4);
list.addAtHead(20);
list.addAtTail(45);
list.get(10);
list.addAtHead(56);
list.get(18);
list.addAtTail(33);
list.get(2);
list.addAtTail(70);
list.addAtHead(57);
list.addAtIndex(31, 24);
list.addAtIndex(16, 92);
list.addAtHead(40);
list.addAtHead(23);
list.deleteAtIndex(26);
list.get(1);
list.addAtHead(92);
list.addAtIndex(3, 78);
list.addAtTail(42);
list.get(18);
list.addAtIndex(39, 9);
list.get(13);
list.addAtIndex(33, 17);
list.addAtIndex(18, 95);
list.addAtIndex(18, 33);
list.addAtHead(80);
list.addAtHead(21);
list.addAtTail(7);
list.addAtIndex(17, 46);
list.get(33);
list.addAtHead(60);
list.addAtTail(26);
list.addAtTail(4);
list.addAtHead(9);
list.get(45);
list.addAtTail(38);
list.addAtHead(95);
list.addAtTail(78);
list.get(54);
list.addAtIndex(42, 86);