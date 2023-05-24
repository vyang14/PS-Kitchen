import React, { useState } from 'react'
import { Jumbotron, Container, Image, Button, Col, Row } from 'react-bootstrap'
//import SearchBar from '../../components/SearchBar/SearchBar'
//import allCategories from '../../data/categories'
import Auth from '../../utils/auth'
import LoginSignupModal from '../../components/LoginSignUpModal/LoginSignUpModal'
import './Homepage.css'

// Homepage that users will see when first logging in
export default function Homepage() {
  function goToCreate() {
    const token = Auth.loggedIn() ? Auth.getToken() : null
    if (!token) {
      return handleShow()
    }
    // It redirects users to create contract when clicking on the button
    window.location.assign('/Menu')
  }
  
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      <div className="homepage-banner"></div>
      <LoginSignupModal
        show={show}
        handleClose={handleClose}
      ></LoginSignupModal>
      <Jumbotron className="jumbotron text-light jumbotron-background">
        <h1>Let's Get to Work.</h1>
        <Row className="centerRow">
          <Col xs={12} md={8}>
            <SearchBar items={allCategories} placeholder="Example: React" />
          </Col>
          <Col xs={12} md={2}>
            <Button className="btn-margin" type="submit" size="lg">
              Search for Contracts
            </Button>
            <Button className="btn-margin" size="lg" onClick={goToCreate}>
              Create a Contract
            </Button>
          </Col>
        </Row>
      </Jumbotron>
      <Container>
        <Row className="aboutUs bg-light p-3">
          <h1>About PaSee’s Flavors Express</h1>

          <p>
          Our goals centered around providing high-quality food and exceptional customer
          service. Some of these goals include carefully selecting and preparing a menu, offering
          healthy choices that are still delicious, innovating and sharing excitement with
          customers through their line of sauces, and creating an excellent atmosphere for
          customers. Additionally, they seem to be focused on taking traditional Asian restaurant
          concepts and adapting them to a convenient To-Go model, which is likely beneficial for
          customers who are looking for quick and easy options. Overall, it sounds like PaSee&#39;s
          Flavors Express is committed to providing an exceptional dining experience for their
          customers.
          </p>
          <br></br>
          <h1>Why US?</h1>
          <p>
          PaSee&#39;s Flavors Express might be a great option for customers who are looking for
          high-quality food, a wide variety of flavors, and a commitment to health and wellness.
          With over 25 years of experience in the restaurant, hospitality industry, and travel to
          many different part of Asian countries, PaSee&#39;s Flavors Express has likely to bring back
          and developed a strong reputation for providing excellent service and delicious food.
          They also seem to be focused on providing healthy options, which can be important for
          customers who are looking to make more health-conscious choices when dining out.
          Additionally, their focus on creating an excellent atmosphere for customers and offering
          convenient To-Go options may make PaSee&#39;s Flavors Express a great choice for
          people with busy schedules who still want to enjoy delicious and healthy food.
          Ultimately, the decision to choose PaSee&#39;s Flavors Express will depend on individual
          preferences and needs, but they seem to be a promising option for anyone looking for
          high-quality food and exceptional service.
          </p>
        </Row>
        <Row>
          <Image className="image" src="./img/eggroll-in-sauce.jpg" rounded />
        </Row>

        <Row className="useDevbids bg-light p-3">
          <Col>
            <Row>
              <h1>What We Do and Offering?</h1>
              <p>
              We are a unique Express food that specializes in authentic by enhancing herbs and spices
              for flavors and health benefits in Asian cuisine. We offer convenient To-Go options for
              customers with busy lifestyles, delivery for those who prefer to enjoy your food at home,
              and catering services for professional and family events.
              Our menu includes flavors of signature Chicken Wings, Chicken Tenders, Classic Egg
              Rolls, World Class Stuff Wings, Best Fried Rice, Thai Pad Kra Pao, Lo Mein, Teriyaki,
              Authentic Thai Curries, BBQ, Healthy Supper Salad, and Steamed Veggies. These
              dishes appear to be a mix of Asian and Western cuisines, providing a diverse range of
              options for your customers.

              We believed it’s great by offering healthy options such as salads and steamed
              vegetables, along with classic comfort foods like Fried Rice and BBQ. This provides
              customers with a range of choices to fit their dietary preferences and needs. Overall, it
              seems like we are focused on providing delicious and healthy Asian cuisine to
              customers with various needs and preferences.
              </p>
              <br></br>
              <h1>Opportunity with US?</h1>
              <p>
              There could be several opportunities for individuals or businesses to partner or work
              with PaSee&#39;s Flavors Express. Here are a few potential examples:
              Franchising: If someone is interested in starting a restaurant or food business, they
              could consider franchising with PaSee&#39;s Flavors Express. This could provide them with
              access to the company&#39;s established brand, menu, and support systems.
              Catering: PaSee&#39;s Flavors Express could offer catering services for corporate events,
              weddings, or other special occasions. This could be an opportunity for individuals or
              businesses to provide their guests with high-quality, flavorful food.
              Ingredient sourcing: If someone owns a farm or food production business, they could
              potentially supply some of the herbs, spices, or other ingredients used in PaSee&#39;s
              Flavors Express&#39; sauces or dishes.
              Consulting: PaSee&#39;s Flavors Express could offer consulting services for other
              restaurants or food businesses looking to improve their menu, customer service, or
              overall operations.
              Marketing partnerships: If someone owns a marketing or advertising agency, they could
              potentially partner with PaSee&#39;s Flavors Express to help promote the company&#39;s brand
              or products.
              Ultimately, the specific opportunities available will depend on the needs and goals of
              both PaSee&#39;s Flavors Express and the individual or business in question.
              </p>
              <br></br>
            </Row>
            <Row>
              <ul>
                <li>
                <h1>Investment with US?</h1>
                <p>
                its potential for growth and profitability. It&#39;s also important to assess the market demand
                for the company&#39;s products or services, as well as its competition and any potential
                risks. Ultimately, the decision to invest in a particular business should be based on an
                individual&#39;s financial goals and risk tolerance.
                </p>
                <br></br>
                </li>
                <li>
                <h1>PaSee’s Flavor Express Market</h1>
                <p>
                There is a high demand for convenient To-Go Asian food, PaSee&#39;s Flavor Express may
                have the potential for growth and profitability. Additionally, if the company can keep its
                operational costs low while providing high-quality food and great services, this could
                help increase profitability.
                </p>
                </li>
                <li>
                <h1>Our Support</h1>
                <p>
                Our focus is on becoming an excellence leader and supporting others to expand
                worldwide. Strong support and leadership are crucial for the success and growth of any
                business, especially in the competitive food industry. By prioritizing support and
                leadership, PaSee&#39;s Flavor Express can potentially establish a strong reputation and
                brand that customers trust and return to. Additionally, supporting others to expand can
                help increase the company&#39;s reach and potential for growth. However, it&#39;s important to
                ensure that the company&#39;s operational capacity and resources are sufficient to support
                such expansion plans. Careful planning, execution, and ongoing monitoring will be
                necessary to ensure that the company can grow sustainably and continue to provide
                high-quality food and great services.
                </p>
                </li>
                <li>
                <h1>Discover PaSee’s Flavors Express Today</h1>
                <p>
                For those interested in exploring PaSee&#39;s Flavors Express as a potential investment or
                partnership opportunity, it&#39;s important we encourage you to conduct thorough research
                and due diligence to assess the company&#39;s financials, market potential, competition,
                management team, and growth plans.
                </p>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
