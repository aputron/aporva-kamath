// utils/translate.ts

const dictionary: Record<string, string> = {
  hello: 'bonjour',
  world: 'monde',
  protein: 'protéine',
  engineering: 'ingénierie',
  data: 'données',
  collection: 'collecte',
}

const letterMap: Record<string, string> = {
  a: '@',
  e: '3',
  i: '1',
  o: '0',
  s: '$',
  t: '7',
  // Add more as needed
}

function stylizeWord(word: string): string {
  return word
    .split('')
    .map((char) => letterMap[char.toLowerCase()] || char)
    .join('')
}

function translateText(text: string): string {
  return text.replace(/\b\w+\b/g, (word) => {
    const lower = word.toLowerCase()
    const translated = dictionary[lower]
    const final = translated ?? word
    return word[0] === word[0].toUpperCase()
      ? stylizeWord(final.charAt(0).toUpperCase() + final.slice(1))
      : stylizeWord(final)
  })
}

const originalTextMap = new WeakMap<Node, string>()

export function translateTextNodes(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const originalText = node.textContent
    if (originalText && originalText.trim().length > 0) {
      if (!originalTextMap.has(node)) {
        originalTextMap.set(node, originalText)
      }
      node.textContent = translateText(originalText)
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const tag = (node as HTMLElement).tagName.toLowerCase()
    if (!['script', 'style', 'meta', 'link', 'noscript'].includes(tag)) {
      node.childNodes.forEach(translateTextNodes)
    }
  }
}

export function restoreTextNodes(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const saved = originalTextMap.get(node)
    if (saved) {
      node.textContent = saved
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const tag = (node as HTMLElement).tagName.toLowerCase()
    if (!['script', 'style', 'meta', 'link', 'noscript'].includes(tag)) {
      node.childNodes.forEach(restoreTextNodes)
    }
  }
}
