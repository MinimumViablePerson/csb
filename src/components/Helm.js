import { Helmet } from 'react-helmet'

const Helm = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <title>CodeSandbox Collections</title>
    <meta
      name="description"
      content="A collection of sandboxes just for you!"
    />

    <meta itemprop="name" content="CodeSandbox Collections" />
    <meta
      itemprop="description"
      content="A collection of sandboxes just for you!"
    />
    <meta
      itemprop="image"
      content="https://i.ibb.co/T0YsvFQ/csb-collection.jpg"
    />

    <meta
      property="og:url"
      content="https://3j5on.csb.app/?ids=l9398,rvhxl&title=My%20Collection"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="CodeSandbox Collections" />
    <meta
      property="og:description"
      content="A collection of sandboxes just for you!"
    />
    <meta
      property="og:image"
      content="https://i.ibb.co/T0YsvFQ/csb-collection.jpg"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="CodeSandbox Collections" />
    <meta
      name="twitter:description"
      content="A collection of sandboxes just for you!"
    />
    <meta
      name="twitter:image"
      content="https://i.ibb.co/T0YsvFQ/csb-collection.jpg"
    />
  </Helmet>
)

export default Helm
