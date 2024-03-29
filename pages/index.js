
import Head from 'next/head'

import { attributes, react as HomeContent } from 'content/pages/home.md'
export default function Home() {

  let { title, cats, image } = attributes
  return (
    <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <article>
      <h1>{title}</h1>
      <img src={image} />
      <HomeContent />
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </article>
  </>
  )
}
