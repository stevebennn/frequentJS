# frequentJS
Do you hate remembering silly crap? me too.....

Fun little library filled with tons of `helpful().chainable().methods()` to make your day better! ;)

####.right()
returns the specified number of characters starting from the right.
```js
let string = 'mySuperLongString';
string.fq().right(6).val; // returns: String
```

####.left()
returns the specified number of characters starting from the left.
```js
let string = 'mySuperLongString';
string.fq().left(7).val; // returns: mySuper
```

####.mid()
returns the specified number of characters between the the starting and ending index.
```js
let string = 'mySuperLongString';
string.fq().mid(8,4).val; // returns: Long
```

####.lower()
returns the string in lowercase.
```js
let string = 'WICKED LOWER CASE';
string.fq().lower().val; // returns: wicked lower case
```

####.upper()
returns the string in uppercase.
```js
let string = 'wicked upper case';
string.fq().upper().val; // returns: WICKED UPPER CASE
```

####.exists()
returns true or false if the string exists in the array passed.
```js
let arr = ['this','is','my','super','cool','array'];
let string = 'cool';
string.fq().exists(arr).val; // returns: true
```

####.toArray()
returns an array using spaces as the delimiter.
```js
let string = 'some cool stuff';
string.fq().toArray().val; // returns: ['some','cool','stuff']
```

####.truncate()
returns the string truncated after character limit is met.
```js
let string = 'my really really long string for whatever reason';
string.fq().truncate(20).val; // returns: my really really lon...
```



