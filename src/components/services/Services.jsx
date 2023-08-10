import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing: Creating high-fidelity mockups and designs that represent the final look and feel of the product.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design: Ensuring that the interface works well across different devices and screen sizes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interaction Design: Designing how users interact with the interface elements, such as buttons, menus, and animations.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Usability Testing: Conducting usability tests with real users to identify issues and improve the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Persona Development: Creating user personas to represent typical users and their characteristics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX Consulting: Providing expert advice and guidance to improve existing interfaces or develop new ones.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3> Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend Development: Building the client-side of web application using technologieslike HTML, CSS, JAVASCRIPT AND REACT to create the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend Development: Developing the server-side logic and database management to handle data processing and server functionalities.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-Stack Development: Combining frontend and backend development skills to create and manage both client-side and server-side components of a web application.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design: Creating websites that automatically adjust their layout and design to fit different screen sizes and devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web API Development: Building Application Programming Interfaces (APIs) that allow different software systems to communicate and exchange data.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Maintenance and Support: Providing ongoing maintenance, updates, and support for existing websites and web applications.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
      </div>
    </section>
  )
}

export default Services