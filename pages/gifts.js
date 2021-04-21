import Columns from '../components/columns/columns'
import Layout from '../components/layout/layout'
import Left from '../components/columns/left'
import Note from '../components/note/note'
import Logo from '../components/image/logo'
import Right from '../components/columns/right'
import Stationery from '../components/stationery/stationery'

import {isReceptionRequest} from '../utils/utils'

export async function getServerSideProps(context) {
  return { 
    props: { 
      reception: isReceptionRequest(context) 
    } 
  }
}

export default function Gifts({ reception }) {
  return (
    <Layout
        pageName="Gifts"
        reception={reception}
    >
        <Stationery>
            <h1>Gifting</h1>
            <p>In 2021 we will have been in a relationship for twelve years, and will have lived together for four.</p>
            <p>While we greatly appreciate the thought, sentiment, and tradition which goes into wedding gifts, we feel as though there is nothing we can truly say that we need.</p>
            <p>Instead, we ask that those who would like to send a gift consider doing so by way of a donation to charity or similar.</p>
            <p>Listed below are some example charities which are close to our hearts.</p>
        </Stationery>
        <section>
            <Columns>
                <Left>
                    <a target="_blank" href="https://www.cancerresearchuk.org/get-involved/donate">
                        <h3>
                            Cancer Research UK
                        </h3>
                    </a>
                    <Note>"Cancer Research UK pioneers life-saving research to bring forward the day when all cancers are cured."</Note>
                </Left>
                <Right>
                    <Logo 
                        src="/images/charities/cruk-logo.svg"
                    />
                </Right>

                <Left>
                    <a target="_blank" href="https://www.cysticfibrosis.org.uk/get-involved/donate">
                        <h3>
                            Cystic Fibrosis Trust
                        </h3>
                    </a>
                    <Note>"We are working towards a brighter future for everyone with cystic fibrosis (CF) by funding cutting-edge research, driving up standards of care and supporting people with the condition and their loved ones every step of the way."</Note>
                </Left>
                <Right>
                    <Logo 
                        src="/images/charities/cystic_fibrosis_trust_logo.png"
                    />
                </Right>

                <Left>
                    <a target="_blank" href="https://woodgreen.org.uk/how-to-help">
                        <h3>
                            Wood Green
                        </h3>
                    </a>
                    <Note>"Wood Green is proud to be the pet charity that makes a difference to the lives of pets and people across the UK.  Our vision is of a world where all pets are well cared for in loving homes for life. To achieve this, we not only provide care for pets in need, but also help people be the best pet owners they can be."</Note>
                </Left>
                <Right>
                    <Logo 
                        src="/images/charities/wood_green_logo.png"
                    />
                </Right>
            </Columns>
        </section>
    </Layout>
  )
}
