import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBCol } from 'mdbreact'
import axios from 'axios'
import './listCandidate.css'



class AllCandidats extends Component {

  state = {
    candidats: null
  }

  componentDidMount() {
    axios.get('http://localhost:3001/admin/candidats')
      .then(respons => {
        console.log('Result:', respons)
        this.setState({ candidats: respons.data.results })
      })

  }



  render() {
    console.log('This.state:', this.state.candidats)
    if (this.state.candidats === null) {
      return <p> loading...</p>
    }
    const tabCandidats = this.state.candidats.map((value, key) => {
      return (
        <div className='candidate-container' key={key}>
          <MDBCard className='card-candidat'>
            <MDBCardBody>
              <div className='value-candidate'>ID : {value.idcandidat}</div>
              <div className='value-candidate'>Nom : {value.name}</div>
              <div className='value-candidate'>Prénom : {value.first_name}</div>
              <div className='value-candidate'>Date de naissance : {value.birth_date}</div>
              <div className='value-candidate'>E-mail : {value.email}</div>
              <div className='value-candidate'>Numéro detéléphone : {value.phone_number}</div>
              <div className='value-candidate'>Adresse : {value.adress}</div>
              <div className='value-candidate'>Code postale: {value.postal_code}</div>
              <div className='value-candidate'>Ville : {value.town}</div>
              <div className='value-candidate'>Lettre de motivation : {value.cover_letter}</div>
              <div className='value-candidate'>Cv : {value.cv}</div>
              <div className='value-candidate'>Message : {value.message}</div>
            </MDBCardBody>
          </MDBCard>
        </div>
      )
    })
    return <div>
      <MDBContainer className='globalForm'>
        <MDBCol md="12">

          {tabCandidats}

        </MDBCol>
      </MDBContainer>
    </div>
  }
}

export default AllCandidats