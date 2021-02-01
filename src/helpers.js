let cache = {}

const fetchWithCORS = (url, options = {}) =>
  fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
    ...options,
    headers: {
      'X-Requested-With': 'Hi!'
    }
  })

const fetchSandboxMetadata = sandboxId =>
  fetchWithCORS(`https://codesandbox.io/s/${sandboxId}`)
    .then(resp => resp.text())
    .then(html => {
      const DOM = document.createElement('html')
      DOM.innerHTML = html
      const head = DOM.querySelector('head')
      const title = head.querySelector('[property="og:title"]').content
      const author = head.querySelector('[property="og:author"]').content
      const description = head.querySelector('[property="og:description"]')
        .content
      const image = head.querySelector('[property="og:image"]').content
      return {
        id: sandboxId,
        title: title.replace(' - CodeSandbox', ''),
        author,
        description,
        image
      }
    })

export const fetchCachedSandboxMetadata = async sandboxId => {
  if (cache[sandboxId] === undefined) {
    const sandboxData = await fetchSandboxMetadata(sandboxId)
    cache[sandboxId] = sandboxData
  }
  return cache[sandboxId]
}
