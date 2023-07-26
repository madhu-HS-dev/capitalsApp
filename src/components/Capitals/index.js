import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeValue = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return activeCountry.country
  }

  render() {
    const {activeCapitalId} = this.state

    const country = this.getCountry()

    return (
      <div className="capitals-container">
        <div className="capitals-card-container">
          <h1 className="capitals-heading">Countries and Capitals</h1>
          <div className="input-container">
            <select
              className="input-element"
              onChange={this.onChangeValue}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachList => (
                <option key={eachList.id} value={eachList.id}>
                  {eachList.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-description">is capital of which country?</p>
          </div>
          <p className="country-heading">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
