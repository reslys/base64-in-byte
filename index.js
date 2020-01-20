export default {
  formatBytes (bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['bytes', 'kb', 'mb']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  },
  b64inByte (base64) {
    var stringLength = base64.length - 'data:image/png;base64,'.length
    var sizeInBytes = 4 * Math.ceil((stringLength / 3)) * 0.5624896334383812
    return sizeInBytes
  }
}
