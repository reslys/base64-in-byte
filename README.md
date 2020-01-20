# Base64 in Byte

![npm (scoped)](https://img.shields.io/npm/v/@reslys/base64inbyte?style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@reslys/base64inbyte?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/reslys/base64-in-byte?style=flat-square)](https://github.com/reslys/base64-in-byte/blob/master/LICENSE)

Get base64 size in byte

## Installation
```sh
npm install @reslys/base64inbyte --save-dev
```

## Usage
```sh
const { formatBytes } = require('@reslys/base64inbyte')

const fileSize = b64inByte(yourBase64)
console.log(fileSize) // 3485

const inBytes = formatBytes(fileSize)
console.log(inBytes) // 34.85 kb
```

## Available Methods
### b64inByte
Get base64 size in byte

```javascript
/**
 * Get base64 size in byte
 * @param {base64} base64
 *
 * @return {integer} the size in bytes
 */

 b64inByte(base64)
```

### formatBytes
Format integer of bytes to readable string such as 34.85 kb

```javascript
/**
 * Format integer of file size
 * @param {integer} bytes
 *
 * @return {string} formatted size
 */

 formatBytes(bytes)
```