
class Circle {
    
    constructor(radius) {
      this._radius = radius;
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
    }
  
    get diameter() {
      return this._radius * 2;
    }
      set diameter(value) {
      this._radius = value / 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    set circumference(value) {
      this._radius = value / (2 * Math.PI);
    }
  
    get area() {
      return Math.PI * this._radius ** 2;
    }

    set area(value) {
      this._radius = Math.sqrt(value / Math.PI);
    }
  }
  
  
  