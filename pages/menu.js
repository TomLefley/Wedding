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

export default function Menu({ reception }) {
  let canapes = !reception &&
    <section>
      <Stationery
        title="Canapés"
        card
      >
        <Item
          title="Ravioli"
          description="Mini ravioli with a pesto dip."
        />
        <Item
          title="Shortcrust Tarts"
          description="Goats' cheese and red onion tartlets."
        />
        <Item
          title="Potato Rostis"
          description="Mini potato rostis with a sour cream dip."
        />
        <Item
          title="Spring Rolls"
          description="Vegetable spring rolls with a hoisin dip."
        />
        <Item
          title="Pakoras"
          description="Vegetable pakoras with a mint yoghurt dip."
        />
      </Stationery>
    </section>
  
  let breakfast = !reception && 
    <section>
      <Stationery
        title="Breakfast"
        card
      >
        <Item
          heading="Main"
          title="Roast Pork"
          description="Served as a sharing joint with all the trimmings."
        />
        <Item
          heading="Main (vegetarian)"
          title="Roasted Vegetable Pithivier"
          description="Golden pastry filled with a medley of roasted vegetables."
        />
        <Item
          heading="Dessert"
          title="A Trio of Desserts"
          description="Lemon brulée tart, sticky toffee pudding, and Mobberley mess."
        />
      </Stationery>
    </section>

  let evening = <section>
      <Stationery
        title="Evening"
        card
      >
        <Item
          heading="Main"
          title="Buffet"
          description="A five-tiered cheese tower accompanied by breads, meats, and other savoury bites."
        />
        <Item
          heading="Dessert"
          title="Hyacinth ice cream trike"
          description="Serving a selection of Marshfield handmade, real dairy ice cream, and quality fruit sorbets."
        />
        <Item
          heading="Drinks"
          title="Cash Bar"
          description="Fully stocked with soft and alcoholic beverages."
        />
      </Stationery>
    </section>

  return (
    <Layout
      pageName="Menu"
      reception={reception}
    >
      {canapes}
      {breakfast}
      {evening}

      <section>
          <Note>Please <a href="mailto:contact@lefley.wedding">let us know</a> if you have any specific dietary requirements.</Note>
      </section>
    </Layout>
  )
}
