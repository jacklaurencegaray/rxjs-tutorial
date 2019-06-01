import RxJS from "rxjs"

/**
 * You can also think of Observables
 * being "streams" of data.
 *
 * Buzzword alert: *streams*.
 * From Wikipedia: a stream is
 * is a sequence of data elements
 * made available over time.
 *
 * This is no different from "news" example
 * from the 1. intro-to-observables, you
 * can think of "updates" from news as "streams".
 * Like a river that has a never-ending
 * "stream" of water. In this case, it's a
 * never-ending "stream" of events.
 *
 * It's worth noting though that in a river context,
 * there's always water in its streams. In an
 * observable, the "stream" is the binding
 * connection you have to the Observable;
 * so it doesn't have to emit data all the time,
 * maybe just sometimes.
 */

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
    return num > 1
  }
}

const streamOfPrimeNumbers = RxJS.Observable.create(observer => {
  let currentNumber = 0
  setInterval(() => {
    if (isPrime(currentNumber)) {
      observer.next("It's a prime number: " + currentNumber)
    }
    currentNumber++
  }, 1000)
})

/**
 * Using the "river" mental model, you
 * could think of `streamOfPrimeNumbers` being
 * an endless water of numbers that "poke" you
 * if it encounters a prime number! Easy right?
 */
