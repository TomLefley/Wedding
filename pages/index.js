import Layout from '../components/layout/layout'
import Name from '../components/name/name'
import Photo from '../components/image/photo'
import Stationery from '../components/stationery/stationery'

import {isReceptionRequest} from '../utils/utils'

export async function getServerSideProps(context) {
  return { 
    props: { 
      reception: isReceptionRequest(context) 
    } 
  }
}

export default function Home({ reception }) {
  return (
    <Layout
      pageName="Home"
      reception={reception}
    >          
      <section>
        <Stationery foliage>
          <Name>Thomas Lefley</Name>
          <h2>{'&'}</h2>
          <Name>Tara Smith-Shelton</Name>
          <p>are getting married on</p>
          <h2>Saturday, 7th August 2021</h2>
        </Stationery>
      </section>
      <section>
        <Photo
          src="/images/couple/icon_studio_walking.jpg"
          alt="The happy couple"
        />
      </section>
    </Layout>
  )
}
