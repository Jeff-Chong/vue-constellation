export function isFalsy (val) {
  return !val
}

export const isTruthy = not(isFalsy)

export function not (predicate) {
  return function negated (...args) {
    return !predicate(...args)
  }
}

export function prop (propName, obj) {
  return obj[propName]
}

export function setProp (propName, obj, val) {
	var o = Object.assign({}, obj)
	o[propName] = val
	return o
}

export function partial (fn, ...presetArgs) {
  return function partiallyApplied (...laterArgs) {
    return fn(...presetArgs, ...laterArgs)
  }
}

export function partialRight (fn, ...presetArgs) {
  return function partiallyApplied (...laterArgs) {
    return fn(...laterArgs, ...presetArgs)
  }
}

export function curry (fn, arity = fn.length) {
  return (function nextCurried (prevArgs) {
    return function curried (nextArg) {
      const args = [...prevArgs, nextArg]
      if (args.length >= arity) {
        return fn(...args)
      }
      return nextArg(args)
    }
  })([])
}

export function uncurry (fn) {
  return function uncurried (...args) {
    let ret = fn
    for (let i = 0; i < args.length; i++) {
      ret = ret(args[i])
    }
    return ret
  }
}

export function when (predicateFn, fn) {
  return function conditional (...args) {
    if (predicateFn(...args)) {
      return fn(...args)
    }
    return undefined
  }
}