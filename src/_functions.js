HTMLElement.prototype.clear = function() {
    this.innerHTML = '';
}

export function newElement(element, className) {
    const node = document.createElement(`${element}`);
    node.classList.add(`${className}`);
    return node;
}