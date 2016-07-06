
let fq = function() {

    this.val = "";

    // sucking in the value we want to work with
    this.rq = function(val) {
        this.val = val;
        return this;
    };

    // returns the specified number of characters starting from the left.
    this.left = function(num) {
        this.val = this.val.substr(0,num);
        return this;
    };

    // returns the specified number of characters starting from the right.
    this.right = function(num) {
        this.val = this.val.slice(-num);
        return this;
    };

    // returns the string in lowercase.
    this.lower = function() {
        this.val = this.val.toLowerCase();
        return this;
    };

    // returns the specified number of characters between the the starting and ending index.
    this.mid = function(sNum,eNum) {
        this.val = this.val.substring((eNum+sNum-1),(sNum-1));
        return this;
    };

    // returns the string in uppercase.
    this.upper = function() {
        this.val = this.val.toUpperCase();
        return this;
    };

    // returns true or false if the string exists in the array passed.
    this.exists = function(arr) {
        this.val = arr.indexOf(this.val) != -1;
        return this;
    };

    //returns an array using spaces as the delimiter.
    this.toArray = function() {
        this.val = this.val.split(" ");
        return this;
    };

    // returns the string truncated after character limit is met.
    this.truncate = function(num){
        this.val.length > num ? this.val = this.val.substr(0,num) + "..." : this.val = this.val;
        return this;
    };

    //returns the word specified by index ( does not use a 0 index )
    this.word = function(num) {
        this.val = this.val.split(" ")[num-1];
        return this;
    };

};

String.prototype.fq = function() {
    return new fq().rq(this);
};