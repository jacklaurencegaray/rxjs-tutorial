import { Observable, fromEvent } from "rxjs"

const target = document.querySelector("#target")
const clicks = fromEvent(target, "click")

clicks.forEach(e => console.log("clicked"))
