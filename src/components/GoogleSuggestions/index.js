// Write your code here

import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchResult = event => {
    this.setState({searchInput: event.target.value})
  }

  finalSearchInput = id => {
    this.setState({searchInput: id})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const result = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="image"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="inner-container">
          <div className="search-container">
            <img
              alt="search icon"
              className="search-logo"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              onChange={this.searchResult}
              placeholder="Search Google"
              className="inputEl"
              type="search"
              value={searchInput}
            />
          </div>
          <ul>
            {result.map(eachItem => (
              <SuggestionItem
                finalSearchInput={this.finalSearchInput}
                suggestionDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
