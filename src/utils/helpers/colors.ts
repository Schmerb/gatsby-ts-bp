const cache: any = {}
/**
 * Converts hex value to rgba equivalent
 * Caches values so that they are not re-calculated per render
 *
 * @param {string} hex "#ff00ff"
 * @param {number} opacity 0 -1.0
 * @returns
 */
export const hex2rgb = (hex: any, opacity: any) => {
  const key = `${hex}_${opacity}`
  // store value for future requests
  // helps with re-renders performance
  if (key in cache) {
    return cache[key]
  }
  let h = hex.replace("#", "")
  h = h.match(new RegExp(`(.{${h.length / 3}})`, "g"))

  // eslint-disable-next-line
  for (let i = 0; i < h.length; i++) {
    h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16)
  }

  if (typeof opacity !== "undefined") h.push(opacity)

  const rgbaVal = `rgba(${h.join(",")})`
  // save for future use
  cache[key] = rgbaVal

  return rgbaVal
}
