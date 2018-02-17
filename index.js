const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
 return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(array) {
  array.pop()
  return array
}

function destructivelyRemoveFirstKitten(array) {
  array.shift()
  return array
}

function appendKitten(array, name) {
  var newarray = [...array, name]
  return newarray
}

function prependKitten(array, name) {
  var newarray = [name, ...array]
  return newarray
}

function removeLastKitten(array) {
  var newarray = array.slice(0, array.length -1)
  return newarray
}

function removeFirstKitten(array) {
  var newarray = array.slice(1)
  return newarray
}