import Image from 'next/image'

import Layout from '../components/layout/layout'
import Name from '../components/name/name'
import Photo from '../components/image/photo'
import Stationery from '../components/stationery/stationery'

export default function Home() {
  return (
    <Layout
      pageName="Home"
    >          
      <section>
        <Stationery>
          <Name>Thomas Lefley</Name>
          <h2>{'&'}</h2>
          <Name>Tara Smith-Shelton</Name>
          <p>are getting married on</p>
          <h2>Saturday, 7th August 2021</h2>
        </Stationery>
      </section>
      <section>
        <Photo
          src="/images/couple/bridge.jpg"
          alt="The happy couple"
        />
      </section>
    </Layout>
  )
}
