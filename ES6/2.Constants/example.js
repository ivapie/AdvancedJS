// Constants
// Before

Object.defineProperty(typeof global === 'object' ? global : window, PI, {
  value: 3.14,
  enumerable: true,
  writable: false,
  configurable: false
});


// After

const PI = 3.14;
