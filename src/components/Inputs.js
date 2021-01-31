import React, { useState } from 'react'

const Inputs = ({ handleAddSandboxSubmit, title, ids }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = () => {
    const urlToCopy = window.encodeURI(
      `https://o1hm8.csb.app?ids=${ids.join(',')}&title=${title}`
    )
    navigator.clipboard.writeText(urlToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="inputs">
      <form onSubmit={handleAddSandboxSubmit}>
        <input
          className="sandbox-url-input"
          name="sandbox-id"
          placeholder="enter a sandbox id or url"
        />
        <button className="add button">ADD 👇</button>
      </form>
      <button className="copy button" onClick={handleCopyUrl}>
        {copied ? 'COPIED! ✅' : 'COPY URL 📋'}
      </button>
    </div>
  )
}

export default Inputs
