import React, { useState } from 'react'

const Inputs = ({ handleAddSandboxSubmit, generateCurrentUrl }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = () => {
    const urlToCopy = generateCurrentUrl()
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
