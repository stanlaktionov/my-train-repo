class CircularQueue {
    constructor(k) {
        this.max = k;
        this._queue = [];
    }
    enQueue(value) {
        let isEnqueued = false;
        if (this._queue.length < this.max) {
            isEnqueued = true;
            this._queue.push(value);
        }
        return isEnqueued;
    }

    deQueue() {
        let isDequeued = false;
        if (this._queue.length) {
            this._queue.shift();
            isDequeued = true;
        }
        return isDequeued;
    }

    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this._queue[0];
    }

    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this._queue[this._queue.length - 1];
    }

    isEmpty() {
        return this._queue.length === 0;
    }

    isFull() {
        return this._queue.length === this.max;
    }

    toArray() {
        return this._queue;
    }
}

const queue = new CircularQueue(3);
queue.enQueue(7);
queue.deQueue();
queue.Front();
queue.deQueue();
queue.Front();
queue.Rear();
queue.enQueue(0);
queue.isFull();
console.log(queue.toArray());
console.log(queue.deQueue());
queue.Rear();
queue.enQueue();

