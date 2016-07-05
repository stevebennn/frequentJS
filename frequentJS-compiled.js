'use strict';

// returns the specified number of characters in uppercase starting from either the left,right or middle.
// String.prototype.upperFrom = function(dir,num,num2) {
//     switch (dir){
//         case 'left': return this.left(num).upper() + this.right(this.length-num);
//             break;
//         case 'mid' : return this.left(num-1) + this.mid(num,num2).upper() + this.right(this.length-num2-1);
//             break;
//         case 'right' : return this.left(this.length-num) + this.right(num).upper();
//             break;
//     }
// };

// // returns the string truncated after character limit is met.
// String.prototype.truncate = function(num){
//     return this.length > num ? this.left(num) + "..." : this;
// };

// returns an array using spaces as the delimiter.
// String.prototype.toArray = function() {
//     return this.split(" ");
// };

// returns the value of a key in a array of object literals.
// String.prototype.lookup = function(arr) {
//     let self = this;
//     return arr.find(function(arr){
//         return arr[self]
//     })[self]
// };

// returns the word specified by index ( does not use a 0 index )
// String.prototype.word = function(num) { return this.split(" ")[num-1]; };

var fq = function () {

    var methods = {};
    methods.val = "";

    // snagging the value we want to manipulate
    methods.request = function (arg) {
        this.val = arg;
        return this;
    };

    // returns the specified number of characters starting from the left.
    methods.left = function (num) {
        this.val = this.val.slice(0, num);
        return this;
    };

    // returns the specified number of characters starting from the right.
    methods.right = function (num) {
        this.val = this.val.slice(this.val.length - num);
        return this;
    };

    // returns the specified number of characters between the the starting and ending index.
    methods.mid = function (sNum, eNum) {
        this.val = this.val.substring(eNum + sNum - 1, sNum - 1);
        return this;
    };

    // returns the string in lowercase.
    methods.lower = function () {
        this.val = this.val.toLowerCase();
        return this;
    };

    // returns the string in uppercase.
    methods.upper = function () {
        this.val = this.val.toUpperCase();
        return this;
    };

    // returns true or false if the string exists in the array passed.
    methods.exists = function (arr) {
        this.val = arr.indexOf(this.val) != -1;
        return this;
    };

    // returns the string value of the val property
    methods.val = function () {
        return this.val;
    };

    return methods;
}();

var arr = ['this', 'that', 'the other thing'];
console.log(fq.request('this').exists(arr).val);

//# sourceMappingURL=frequentJS-compiled.js.map