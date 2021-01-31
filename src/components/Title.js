import React from 'react'

const Title = ({ handleTitleChange, title }) => (
  <input className="title" onChange={handleTitleChange} value={title} />
)

export default Title
