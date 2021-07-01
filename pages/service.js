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

export default function Service({ reception }) {
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
          heading="17:00"
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
          description="First dance and vintage set."
        />
        <Item
          heading="21:00"
          title="Buffet"
        />
        <Item
          heading="21:30"
          title="Live music"
          description="Electric set and disco."
        />
        <Item
          heading="24:00"
          title="Departures."
        />
      </Stationery>
    </section>

  return (
    <Layout
      pageName="Service"
      reception={reception}
    >
      {wedding}
      {evening}
      <section>
          <Note>The dress code for {reception ? "our evening reception" : "both our wedding and evening reception"} is semi-formal; suits and dresses.</Note>
          <Note>We remain optimistic about the easing of pandemic restrictions, however guest limits are the main area of remaining concern. We kindly ask that you not bring additional guests who are not named on your RSVP.</Note>
          <Note>Unfortunately, we cannot accommodate children during {reception ? "our evening reception" : "our wedding or evening reception"}.</Note>
      </section>
    </Layout>
  )
}
