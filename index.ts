/**
 * This is the standard index.ts starting point.
 *
 * author  Emmanuel FN
 * version 1.0
 * since   2024-04-21
 */
import { EmmanuelStack } from './EmmanuelStack'

let fruits = new EmmanuelStack()
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack)
console.log("peak: " + fruits.peak)
console.log("popped: " + fruits.popItem())
console.log("fruits: " + fruits.showStack)
fruits.clear()
console.log("Clearing stack...")
console.log("fruits: " + fruits.showStack)
console.log("")

let colours = new EmmanuelStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.showStack)
console.log("peak: " + colours.peak)
console.log("popped: " + colours.popItem())
console.log("popped: " + colours.popItem())
console.log("peak: " + colours.peak)
console.log("colours: " + colours.showStack)
colours.clear()
console.log("Clearing stack...")
console.log("colours: " + colours.showStack)
console.log("")

let shapes = new EmmanuelStack()
shapes.push("square")
shapes.push("triangle")
shapes.push("circle")
console.log("shapes: " + shapes.showStack)
console.log("peak: " + shapes.peak)
shapes.clear()
console.log("Clearing stack...")
console.log("shapes: " + shapes.showStack)
console.log("peak: " + shapes.peak)
console.log("")

console.log("\nDone.")
