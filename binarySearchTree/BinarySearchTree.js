class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    get isLeaf() {
        return this.left === null && this.right === null;
    }

    append(value) {
        const append = (node, value) => {
            if (node === null) {
                return new TreeNode(value);
            }

            if (value < node.value) {
                node.left = append(node.left, value);
            } else if (value > node.value) {
                node.right = append(node.right, value);
            } else {
                console.warn(`Value ${value} was not inserted in BST`);
            }
            return node;
        };
        append(this, value);
        return this;
    }

    find(value, node = this) {
        if (node.value === value) {
            return node;
        }

        if (value < node.value) {
            return this.find(value, node.left);
        }
        return this.find(value, node.right);
    }

    remove(value) {
        const remove = (value, node) => {
            if (!node) {
                return null;
            }
            if (node.value === value) {
                if (node.right === null && node.left === null) {
                    return null;
                }

                if (node.left === null) {
                    return node.right;
                }

                if (node.right === null) {
                    return node.left;
                }

                let temp = node.right;

                while (temp.left !== null) {
                    temp = temp.left;
                }
                node.value = temp.value;
                node.left = remove(temp.value, node.right);
                return node
            } else if (value < node.value) {
                node.left = remove(value, node.left);
                return node;
            }
            node.right = remove(value, node.right);
            return node;
        };
        remove(value, this);
        return this;
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new TreeNode(value);
    }

    append(value) {
        this.root.append(value);
        return this;
    }

    find(value) {
        return this.root.find(value);
    }

    delete(value) {
        return this.root.remove(value)

    }

    getMinHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        let left = this.getMinHeight(node.left);
        let right = this.getMinHeight(node.right);

        if (left < right) {
            return left + 1;
        }
        return right + 1;
    }

    getMaxHeight(node = this.root) {
        if (node === null) {
            return - 1;
        }
        let left = this.getMaxHeight(node.left);
        let right = this.getMaxHeight(node.right);

        if (left > right) {
            return left + 1;
        }

        return right + 1;
    }

    get isBalanced() {
        return this.getMinHeight() >= this.getMaxHeight() - 1;
    }

    inOrder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    preOrder() {
        const result = [];
        const traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    postOrder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        };
        traverse(this.root);
        return result;
    }

    levelOrder() {
        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }
}

const tree = new BinarySearchTree(9);
tree.append(4).append(3).append(6).append(5).append(7).append(17).append(22).append(20).append(10);
console.log("In Order ", tree.inOrder());
console.log("Pre Order ", tree.preOrder());
console.log("Post Order ", tree.postOrder());
console.log("Level Order ", tree.levelOrder());