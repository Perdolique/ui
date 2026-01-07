import { createHash, type BinaryLike } from 'crypto'
import { basename } from 'path'

/**
 * Generates scoped CSS module class names with the pattern: {baseName}_{className}_{hash}
 * 
 * @param className - The original class name from the CSS module
 * @param filename - The path to the file containing the CSS module
 * @param data - The CSS content used to generate a unique hash
 * @returns A scoped class name string
 */
export function generateScopedName(className: string, filename: string, data: BinaryLike): string {
  const hash = createHash('sha256')
    .update(data)
    .digest('hex')
    .slice(0, 6)

  const filePath = filename
    .replace(/\.vue(?:\?.+?)?$/u, '')
    .replace(/\[|\]/gu, '')

  const baseName = basename(filePath)

  return `${baseName}_${className}_${hash}`
}
