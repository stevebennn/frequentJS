// returns the specified number of characters starting from the left.
String.prototype.left = function(num) { return this.slice(0,num) };

// returns the specified number of characters starting from the right.
String.prototype.right = function(num) { return this.substr(-num) };

// returns the specified number of characters between the the starting and ending index.
String.prototype.mid = function(sNum,eNum) { return this.substring((eNum+sNum-1),(sNum-1)) };

// returns the string in lowercase.
String.prototype.lower = function() { return this.toLowerCase() };

// returns the string in uppercase.
String.prototype.upper = function() { return this.toUpperCase() };

// returns true or false if the string exists in the array passed.
String.prototype.exists = function(arr) { return arr.indexOf(this) != -1 };

// returns the string truncated after character limit is met.
String.prototype.truncate = function(num){
    return this.length > num ? this.left(num) + "..." : this;
}

// returns an array using spaces as the delimiter.
String.prototype.toArray = function() {
    return this.split(" ");
}

// returns the value of a key in a array of object literals.
String.prototype.lookup = function(arr) {
    let self = this;
    return arr.find(function(arr){
        return arr[self]
    })[self]
};