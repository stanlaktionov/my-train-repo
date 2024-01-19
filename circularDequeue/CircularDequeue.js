class CircularDequeue {
    constructor(k) {
        this.max = k;
        this._queue = [];
    }

    insertFront(value) {
        let isSuccess = false;
        if (this._queue.length < this.max) {
            this._queue.unshift(value);
            isSuccess = true;
        }
        return isSuccess;
    }

    insertLast(value) {
        let isSuccess = false;
        if (this._queue.length < this.max) {
            this._queue.push(value);
            isSuccess = true;
        }
        return isSuccess;
    }

    deleteFront() {
        let isSuccess = false;
        if (this._queue.length) {
            this._queue.shift();
            isSuccess = true;
        }
        return isSuccess;
    }

    deleteLast() {
        let isSuccess = false;
        if (this._queue.length) {
            this._queue.pop();
            isSuccess = true;
        }
        return isSuccess;
    }

    getFront() {
        const value = this._queue[0];
        return value === undefined ? -1 : value;
    }

    getRear() {
        const value = this._queue[this._queue.length - 1];
        return value === undefined ? -1 : value;
    }

    isEmpty() {
        return this._queue.length === 0;
    }

    isFull() {
        return this._queue.length === this.max;
    }
}