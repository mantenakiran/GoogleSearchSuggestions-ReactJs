// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, finalSearchInput} = props
  const {suggestion} = suggestionDetails

  const toSearchResult = () => {
    finalSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="para">{suggestion}</p>
      <img
        onClick={toSearchResult}
        className="arrow-image"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}
export default SuggestionItem
