import Item from '../components/stationery/item'
import Layout from '../components/layout/layout'
import Note from '../components/note/note'
import Stationery from '../components/stationery/stationery'

import {isReceptionRequest} from '../utils/utils'

export async function getServerSideProps(context) {
  return { 
    props: { 
      reception: isReceptionRequest(context) 
    } 
  }
}

export default function Venue({ reception }) {
  let wedding = !reception &&
    <section>
      <Stationery
        title="Wedding"
        card
      >
        <Item
          heading="13:00"
          title="Arrivals"
        />
        <Item
          heading="14:00"
          title="Ceremony"
        />
        <Item
          heading="14:30"
          title="Drinks Reception"
          note="Canapés, photographs, and lawn games."
        />
        <Item
          heading="16:00"
          title="Breakfast"
        />
      </Stationery>
    </section>

  let evening = <section>
      <Stationery
        title="Evening Reception"
        card
      >
        <Item
          heading="19:30"
          title="Arrivals"
        />
        <Item
          heading="20:00"
          title="Live Music"
          description="First dance and electric set."
        />
        <Item
          heading="21:00"
          title="Buffet"
        />
        <Item
          heading="22:00"
          title="Live music"
          description="Electric set"
        />
        <Item
          heading="24:00"
          title="Departures"
        />
      </Stationery>
    </section>

  return (
    <Layout
      pageName="Service"
    >
      {wedding}
      {evening}
      <section>
          <Note>The dress code for {reception ? "our evening reception" : "both our wedding and evening reception"} is semi-formal; suits and dresses.</Note>
          <Note>Unfortunately, we cannot accomodate children during {reception ? "our evening reception" : "our wedding or evening reception"}.</Note>
      </section>
    </Layout>
  )
}
