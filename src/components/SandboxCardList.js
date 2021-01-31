import React from 'react'
import SandboxCard from './SandboxCard'

const SandboxCardList = ({ sandboxes, removeId }) => {
  return (
    <div className="sandboxes">
      {sandboxes.length === 0 && <h2>No sandboxes added yet!</h2>}
      {sandboxes.map((sandbox, index) => (
        <SandboxCard
          key={`${index}-${sandbox.id}`}
          sandbox={sandbox}
          removeId={removeId}
        />
      ))}
    </div>
  )
}

export default SandboxCardList
