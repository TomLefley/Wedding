import Item from '../components/stationery/item'
import Layout from '../components/layout/layout'
import Note from '../components/note/note'
import Stationery from '../components/stationery/stationery'

export default function Menu() {
  return (
    <Layout
      pageName="Menu"
    >
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
            description="Vegetarian spring rolls with a hoisin dip."
          />
        </Stationery>
      </section>

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
            description="Lemon brulée tart, sticky toffee pudding, and Mobberly mess."
          />
        </Stationery>
      </section>

      <section>
        <Stationery
          title="Evening"
          card
        >
          <Item
            heading="Food"
            title="Buffet"
            description="A wide selection of breads, meats, and cheeses."
          />
          <Item
            heading="Drinks"
            title="Cash Bar"
            description="Fully stocked with soft and alcoholic beverages."
          />
        </Stationery>
      </section>

      <section>
          <Note>Please <a href="mailto:contact@lefley.wedding">let us know</a> if you have any specific dietary requirements.</Note>
      </section>
    </Layout>
  )
}
