class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    let min = Math.floor(this.currentTime/60)
    return min
  }

  getSeconds() {
    let sec = this.currentTime % 60
    return sec
  }

  computeTwoDigitNumber(value) {
    if(String(value).length === 2){
      return String(value)
    } else if (String(value).length === 1){
      return `0${value}`
    }

    // Alternative 2
    // let newValue = String(value).slice(-2)
    // if(newValue.length === 2){
    //   return newValue
    // } else if (newValue.length === 1){
    //   return `0${newValue}`
    // }

    // Adam's solution
    // return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
