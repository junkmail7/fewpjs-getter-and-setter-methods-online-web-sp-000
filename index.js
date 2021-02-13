class Circle {
    constructor(radius) {
      this.radius = radius;
    }
   
    set diameter( diameter ) {
        this.radius = diameter / 2
      }
  
      set circumference( circumference ) {
        this.radius = circumference / ( Math.PI * 2 )
      }
    set area( area ) {
        this.radius = Math.sqrt( area / Math.PI )
      }
   
    get diameter() {
      return this.radius * 2
    }

    get circumference() {
        return 2*this.radius * Math.PI
      }
      get area() {
        return (this.radius ** 2 ) * Math.PI
      }
}
   