const app = "I don't do much."
Arrays destructivelyAppendKitten(name) {
  return array.push(name)
}

function destructivelyPrependKitten(array, name) {
  array.unshift(name)
  return array
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