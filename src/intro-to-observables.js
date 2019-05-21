import RxJS from "rxjs"

/**
 * What are observables?
 * I'm going to explain the word by breaking
 * down its word semantics:
 * observe-able ~ something you are "able"
 * to "observe" from.
 *
 * E.g: you can think of "news" as observables.
 * "News" are something you "subscribe"
 * to in order to get the latest "updates" or
 * "events".
 *
 * Let's stick with the "news" example
 * as our mental model,
 * when you "subscribe" to a news,
 * you expect to receive, at any time,
 * any events or updates. So let's translate
 * that to code:
 */

const news = RxJS.Observable.create(observer => {
  observer.next("Weather forecast tomorrow is rainy.")
  observer.next("Your local sports team won today.")
})

/**
 * The above example creates an Observable "ness"
 * and attaches a callback to it. You may be wondering,
 * "what in the world is .next()"?
 *
 * When we created an Observable, we passed a callback
 * that receives an "observer". This "observer", in the news
 * example, could be you, your friends, or anyone else!
 *
 * This observable "pokes" all the "observers" by emitting
 * ".next()" to them, the value in the "next(value)" essentially
 * could be anything. Since we're talking about news, then this
 * could be an event or a sports update.
 */

const you = news.subscribe(update => {
  switch (update) {
    case "Weather forecast tomorrow is rainy.":
      // tomorrow.bringUmbrella();
      break
    case "Your local sports team won today.":
      // me.scream('yay')
      break
  }
})

/**
 * So that's "you", subscribing
 * from the "news". Receiving an "update". And after
 * receiving the update, you do the necessary logic.
 *
 * In development context, this "update" are "events".
 * Emitted by virtually by any source: a "socket", an "eventListener"
 * from the DOM, ...
 */

const button = document.getElementById("targetButton")

/** RxJS way */
const clicks = RxJS.fromEvent(button, "click")
clicks.forEach(event => console.log("targetButton was clicked!"))

/** Vanila HTML way */
button.addEventListener("click", function(event) {
  console.log("targetButton was clicked!")
})

/**
 * Above codes are equivalent to each other, although generally
 * they both have the same mental model underneath, it's worth noting
 * that you can export `clicks` and let others subscribe it
 * from there.
 *
 * `fromEvent` is an RxJS function that returns an
 * Observable for you from an event (e.g a mouseClick from a button).
 */

/** RxJS way */
export { clicks }

/** HTML way */
console.log("There's nothing we can export from button.addEventListener")

/**
 * In the HTML way, we can only export the
 * "button" which we might not want to do as
 * we're "exposing" the whole button functionality
 * itself, not the events coming from the button. The same
 * way `clicks` allow you to just `subscribe` from its
 * events.
 *
 * Things we learned from this:
 * 1. Observables and the mental model around it.
 * 2. Creating observables
 * 3. the `fromEvent` function
 * 4. "Subscribing" to observables.
 */
