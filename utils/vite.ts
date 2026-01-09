import { createHash, type BinaryLike } from 'node:crypto'
import { basename } from 'node:path'

export function generateCssModuleScopedName(className: string, filename: string, data: BinaryLike) : string {
  const sliceStart = 0
  const sliceEnd = 6

  const hash = createHash('sha256')
    .update(data)
    .digest('hex')
    .slice(sliceStart, sliceEnd)

  const filePath = filename
    .replace(/\.vue(?:\?.+?)?$/u, '')
    .replaceAll(/\[|\]/gu, '')

  const baseName = basename(filePath)

  return `${baseName}_${className}_${hash}`
}
