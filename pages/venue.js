import Image from 'next/image'

import Columns from '../components/columns/columns'
import Item from '../components/stationery/item'
import Layout from '../components/layout/layout'
import Left from '../components/columns/left'
import Map from '../components/map/map'
import Note from '../components/note/note'
import Photo from '../components/image/photo'
import Right from '../components/columns/right'
import Stationery from '../components/stationery/stationery'

export default function Venue() {
  return (
    <Layout
      pageName="Venue"
    >
      <Stationery>
        <h1>The Oak Tree of Peover</h1>
        <p><em>"A beautiful oak frame venue, overlooking the cheshire countryside."</em></p>
      </Stationery>
      <a target="_blank" href="https://www.oaktreeofpeover.co.uk">
          <Photo 
            src="/images/venue/venue_exterior.jpg"
          />
      </a>

      <section>
          <h2>Location</h2>
          <Columns>
            <Left>
              <address>
                  Back Lane, Lower Peover
                  <br/>
                  Knutsford, Cheshire
                  <br/>
                  North West
                  <br/>
                  WA16 9SG
              </address>
              <br/>
              <Note>No on-site accomodation.</Note>
              <Note>Parking available, all vehicles to be retreived by 10am the following morning.</Note>
            </Left>
            <Right>
              <Map 
                source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.485133123547!2d-2.4094561485515102!3d53.26292678855901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a56627df51f23%3A0xd304c71f89d370f!2sThe%20Oak%20Tree%20of%20Peover!5e0!3m2!1sen!2suk!4v1611160087796!5m2!1sen!2suk"
              />
            </Right>
          </Columns>
      </section>

      <section>
          <h2>Hotels</h2>
          <p>The Oak Tree of Peover is situated in Lower Peover, a short drive from Northwich, Knutsford, and Manchester Airport.</p>
          <p>Listed below are some popular hotels in the area.</p>
          <Columns>

              <Left>
                  <a target="_blank" href="https://www.cottonshotel.co.uk">
                      <h3>
                          The Cottons Hotel
                          <br/>
                          Knutsford
                      </h3>
                  </a>
                  <Note>4.4 miles</Note>
                  <Note>
                      <a className="link-clean" href="tel:+441565 650333">t: +44 (0) 1565 650333</a>
                  </Note>
              </Left>
              <Right>
                  <Map 
                    source="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d19082.52126216374!2d-2.4166885927203947!3d53.283889317812786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x487a55aa78270ff3%3A0x7d24f9959e66b14d!2sThe%20cottons%20hotel%2C%20Manchester%20Road%2C%20Knutsford!3m2!1d53.300304999999994!2d-2.3721281999999997!4m5!1s0x487a56627df51f23%3A0xd304c71f89d370f!2sThe%20Oak%20Tree%20of%20Peover%2C%20Back%20Lane%2C%20Lower%20Peover%2C%20Knutsford!3m2!1d53.2629236!2d-2.4072621!5e0!3m2!1sen!2suk!4v1611177450353!5m2!1sen!2suk"
                  />
              </Right>

              <Left>
                  <a target="_blank" href="https://themereresort.co.uk">
                      <h3>
                          The Mere Golf Resort {'&'} Spa
                          <br/>
                          Mere
                      </h3>
                  </a>
                  <Note>6.5 miles</Note>
                  <Note>
                      <a className="link-clean" href="tel:+441565 830155">t: +44 (0) 1565 650333</a>
                  </Note>
              </Left>
              <Right>
                  <Map 
                    source="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d38151.90321449521!2d-2.4341982988595334!3d53.29859952198731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x487a5502468e548b%3A0xc4e6700cb52d4b5b!2sThe%20Mere%20Golf%20Resort%20%26%20Spa%2C%20Chester%20Road%2C%20Mere%2C%20Knutsford!3m2!1d53.3314296!2d-2.4073027!4m5!1s0x487a56627df51f23%3A0xd304c71f89d370f!2sThe%20Oak%20Tree%20of%20Peover%2C%20Back%20Lane%2C%20Lower%20Peover%2C%20Knutsford!3m2!1d53.2629236!2d-2.4072621!5e0!3m2!1sen!2suk!4v1611177479554!5m2!1sen!2suk"
                  />
              </Right>

              <Left>
                  <a target="_blank" href="https://www.greatukpubs.co.uk/the-cross-keys-hotel-knutsford">
                      <h3>
                          The Cross Keys Hotel
                          <br/>
                          Knutsford
                      </h3>
                  </a>
                  <Note>5.3 miles</Note>
                  <Note>
                      <a className="link-clean" href="tel:+441565 750404">t: +44 (0) 1565 750404</a>
                  </Note>
              </Left>
              <Right>
                  <Map 
                    source="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d19081.890040205333!2d-2.4166885927176724!3d53.28530281783164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x487a546c94a079d9%3A0xe5d78bf393c1d395!2sThe%20Cross%20Keys%20Hotel%2C%20King%20Street%2C%20Knutsford!3m2!1d53.3039701!2d-2.3728243!4m5!1s0x487a56627df51f23%3A0xd304c71f89d370f!2sThe%20Oak%20Tree%20of%20Peover%2C%20Back%20Lane%2C%20Lower%20Peover%2C%20Knutsford!3m2!1d53.2629236!2d-2.4072621!5e0!3m2!1sen!2suk!4v1611177421986!5m2!1sen!2suk"
                  />
              </Right>

              <Left>
                  <a target="_blank" href="https://www.premierinn.com/gb/en/hotels/england/cheshire/northwich/northwich-south.html">
                      <h3>
                          Premier Inn
                          <br/>
                          Northwich South
                      </h3>
                  </a>
                  <Note>5.9 miles</Note>
                  <Note>
                      <a className="link-clean" href="tel:+44333 3211363">t: +44 (0) 3333 211363</a>
                  </Note>
              </Left>
              <Right>
                  <Map 
                    source="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d38187.768521928585!2d-2.4949861491741396!3d53.258439619849604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x486cec577796ba3d%3A0x8a50a1bac2b40b6f!2sPremier%20Inn%20Northwich%20South%20hotel%2C%20London%20Rd%2C%20Leftwich%2C%20Northwich%20CW9%208EG!3m2!1d53.2409939!2d-2.51219!4m5!1s0x487a56627df51f23%3A0xd304c71f89d370f!2sThe%20Oak%20Tree%20of%20Peover%2C%20Back%20Lane%2C%20Lower%20Peover%2C%20Knutsford!3m2!1d53.2629236!2d-2.4072621!5e0!3m2!1sen!2suk!4v1611177293325!5m2!1sen!2suk"
                  />
              </Right>

              <Left>
                  <a target="_blank" href="https://www.travelodge.co.uk/hotels/520/Northwich-Lostock-Gralam-hotel">
                      <h3>
                          Travelodge Northwich
                          <br/>
                          Lostock Gralam
                      </h3>
                  </a>
                  <Note>3.1 miles</Note>
                  <Note>
                      <a className="link-clean" href="tel:+448719 846484">t: +44 (0) 8719 846484</a>
                  </Note>
              </Left>
              <Right>
                  <Map 
                    source="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d19087.84295933593!2d-2.449158042743555!3d53.27197136765423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x487af8ed71f8d61f%3A0x6d0eb4bb81823333!2sTravelodge%20Northwich%20Lostock%20Gralam%2C%20Wells%20Avenue%2C%20Lostock%20Gralam%2C%20Northwich!3m2!1d53.271408099999995!2d-2.4550581!4m5!1s0x487a56627df51f23%3A0xd304c71f89d370f!2sThe%20Oak%20Tree%20of%20Peover%2C%20Back%20Lane%2C%20Lower%20Peover%2C%20Knutsford!3m2!1d53.2629236!2d-2.4072621!5e0!3m2!1sen!2suk!4v1611177343864!5m2!1sen!2suk"
                  />
              </Right>

          </Columns>
      </section>
    </Layout>
  )
}
