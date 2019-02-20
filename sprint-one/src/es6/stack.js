var Stack = function() {
    var count = 0;
    var stack = {};
}

Stack.prototype.push = function(string) {
    stack[count] = string;
    count++;
}

Stack.prototype.pop = function() {

    if (count === 0) {
        return undefined;
    }
    count--;
    var result = stack[count];
    delete stack[count];
    return result;
}


Stack.prototype.size = function() {
    return count;
}

var stacks = Stack();
console.log(stacks.push('string'))