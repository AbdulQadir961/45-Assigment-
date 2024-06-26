function burger() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("buger order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
console.log("enjoy your buger qadir khan");
burger('chicken', 'moye sauce', 'cheese');
burger('beef', 'capsicum', 'tomato');
burger('chicken', 'tomato', 'chili sauce');
