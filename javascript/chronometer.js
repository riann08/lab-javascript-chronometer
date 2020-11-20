class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    // ... your code goes here
      this.intervalId = setInterval(() => {
      this.currentTime += 1;
      
      }, 1000);
  }
  
  getMinutes() {
    // ... your code goes here
    let mins = Math.floor(this.currentTime / 60);
    return mins;
  }

  getSeconds() {
    // ... your code goes here
    let secs = (this.currentTime % 60);
    return secs;
  }

  twoDigitsNumber(n) {
    // ... your code goes here
    return String(n).padStart(2, '0');
  }
  stopClick() {
    // ... your code goes here 
    return clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
     this.currentTime = 0;
  }

  splitClick() {
    // ... your code goes here
    return this.twoDigitsNumber(this.getMinutes(this.currentTime)) + ":" + this.twoDigitsNumber(this.getSeconds(this.currentTime));
  }
}
