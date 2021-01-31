const SandboxCard = ({ sandbox, removeId }) => (
  <div className="sandbox">
    <button className="delete button" onClick={() => removeId(sandbox.id)}>
      X
    </button>
    <img
      className="screenshot"
      src={sandbox.image}
      alt="screenshot of sandbox"
    />
    <h1 className="title">{sandbox.title}</h1>
    <div className="description">{sandbox.description}</div>
    <div className="links">
      <a
        className="author"
        href={`https://codesandbox.io/u/${sandbox.author}`}
        target="_blank"
        rel="noreferrer"
      >
        {sandbox.author}
      </a>
      <a
        className="open-sandbox button"
        href={`https://codesandbox.io/s/${sandbox.id}`}
        target="_blank"
        rel="noreferrer"
      >
        Open Sandbox
      </a>
    </div>
  </div>
)

export default SandboxCard
