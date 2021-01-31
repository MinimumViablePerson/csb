import React, { useCallback, useEffect, useState } from 'react'
import Inputs from './components/Inputs'

import SandboxCardList from './components/SandboxCardList'
import Title from './components/Title'
import { fetchCachedSandboxMetadata } from './helpers'
import './styles.css'

const searchParams = new URLSearchParams(window.location.search)
const initialTitle = searchParams.get('title') || 'Untitled Collection'
const idsString = searchParams.get('ids')
const initialIds = idsString ? idsString.split(',') : []

function App() {
  const [ids, setIds] = useState(initialIds)
  const [sandboxes, setSandboxes] = useState([])
  const [title, setTitle] = useState(initialTitle)

  const addId = newId => {
    if (ids.includes(newId)) return
    setIds(ids => [newId, ...ids])
  }

  const removeId = targetId => setIds(ids.filter(id => id !== targetId))

  const handleAddSandboxSubmit = event => {
    event.preventDefault()
    const input = event.target['sandbox-id'].value
    let id = input

    if (input.length < 5) return

    try {
      if (true) {
        const url = new URL(input)
        id = url.pathname.split('/').slice(-1)[0].split('-').slice(-1)[0]
      }
    } catch (e) {}

    addId(id)
    event.target.reset()
  }

  const handleTitleChange = e => setTitle(e.target.value)

  const fetchSandboxes = useCallback(async () => {
    const newSandboxes = await Promise.all(ids.map(fetchCachedSandboxMetadata))
    setSandboxes(newSandboxes)
  }, [ids])

  useEffect(() => {
    fetchSandboxes()
  }, [fetchSandboxes])

  useEffect(() => {
    if (ids.length === 0) return

    window.history.replaceState(
      null,
      null,
      `https://o1hm8.csb.app?ids=${ids.join(',')}&title=${title}`
    )
  }, [ids, title])

  return (
    <div className="App">
      <Title title={title} handleTitleChange={handleTitleChange} />
      <Inputs
        handleAddSandboxSubmit={handleAddSandboxSubmit}
        title={title}
        ids={ids}
      />
      <SandboxCardList sandboxes={sandboxes} removeId={removeId} />
    </div>
  )
}

export default App
