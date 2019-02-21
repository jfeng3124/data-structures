class Stack {

  constructor() {
    this.storage = {};
    this.count = 0;
  }
  push (value) {
          this.storage[this.count] = value;
          this.count++;
        };
  pop () {
         if (this.count === 0) {
            return this.count = 0;
          }
          this.count--;
          var result = this.storage[this.count];
          delete this.storage[this.count];
          return result;
        };
  size () {
          return this.count
        }
}


