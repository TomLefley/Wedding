import Item from '../components/stationery/item'
import Layout from '../components/layout/layout'
import Note from '../components/note/note'
import Stationery from '../components/stationery/stationery'

export default function Venue() {
  return (
    <Layout
      pageName="Service"
    >
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

      <section>
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

      <section>
          <Note>The dress code for both the wedding and evening reception is semi-formal; suits and dresses.</Note>
          <Note>Unfortunately, we cannot accomodate children during our wedding or evening reception.</Note>
      </section>
    </Layout>
  )
}
