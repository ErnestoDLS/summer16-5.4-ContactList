import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      contacts: [
        {
          contact_name: "Rodrigo Pinheiro",
          contact_image: "rpbjj",
          contact_email: "rpbjj@gmail.com",
          contact_phone: " (210) 404-9955",
          contact_location: "San Antonio,TX"
        },{
          contact_name: "Marcelo Garcia",
          contact_image: "marcelogarcia",
          contact_email: "mgbjj@gmail.com",
          contact_phone: "(212) 414-0044",
          contact_location: "New York, NY"
        },{
          contact_name: "Eddie Bravo",
          contact_image: "eddiebravo",
          contact_email: "eddie@10thplanetjj.com",
          contact_phone: "(626) 123-4567",
          contact_location: "Los Angeles,CA"
        },{
          contact_name: "Jeff Glover",
          contact_image: "jeffglover",
          contact_email: "donkeyguard@yahoo.com",
          contact_phone: "(619) 223-5581",
          contact_location: "San Diego, CA"
        }
      ]
    }
  },

  render() {
    return(
      <ul className="contacts__list">
        {this.props.contacts.map(function(contact, i){
          return <li key={i} className="contact__li">
            <Link to={`/Detail/${contact.contact_image}/${contact.contact_name}/${contact.contact_email}/${contact.contact_phone}/${contact.contact_location}`}>
              <img className="contact__image--preview" src={`./images/${contact.contact_image}.jpg`}/>
              <h2 className="contact__name--preview">{contact.contact_contact_name}</h2>
            </Link>
          </li>
        })}
      </ul>
    )
  }
})
