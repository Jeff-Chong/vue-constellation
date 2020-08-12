import { prop, setProp } from '../util/fp-helpers'

/**
 * 数据结构
 *  {
 *    'today': {
 *        '摩羯座': { ... },
 *        ...
 *      },
 *    'tomorrow: { ... },
 *    ...
 *  }
 */
let constellations = {}

const freezeConstellations = Object({
  hasItem,
  addItem,
  getConstellations
})

export default freezeConstellations

function hasItem ({ consName, type }) {
  let booleanResult = false

  if (!consName || !type) {
    return booleanResult
  }

  const constellationList = prop(type, constellations)
  if (!constellationList) {
    return booleanResult
  }

  const constellation = prop(consName, constellationList)
  if (constellation) {
    booleanResult = true
  }

  return booleanResult
}

function addItem ({ consName, type, data }) {
  if (!consName || !type) {
    return
  }

  let constellationList = prop(type, constellations)
  if (!constellationList) {
    constellations = setProp(type, constellations, {})
  }

  constellationList = setProp(consName, constellationList, data)
  constellations = setProp(type, constellations, constellationList)
}

function getConstellations () {
  return Object.assign({}, constellations)
}

