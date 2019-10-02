// const square = function(x) {
//   return x * x;
// };

// const square = x => {
//   return x * x;
// };

// const square = x => x * x;

// console.log(square(2));

// arrow functions do not bind their own 'this' value
// not well suited for methods when we want to access 'this'
// arrow notation not use for functions defined as methods (i.e. on objects)
const event = {
  name: 'Birthday Party',
  guestList: ['Anthony', 'Null'],
  printGuestList() {
    // old way to access 'this' attributes
    // const that = this;
    console.log('Guest List for ' + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + ' is attending ' + this.name);
    });
  }
};

event.printGuestList();
