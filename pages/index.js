import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices/index.js'

const Home = ({ menu, slices }) => {
  return <SliceZone slices={slices} components={components} />
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const homePage = await client.getSingle('homepage')

  return {
    props: {
      slices: homePage.data.slices,
    },
  }
}

export default Home
