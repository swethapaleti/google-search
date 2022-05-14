import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  searchGoogle = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  selectItem = id => {
    const {suggestionsList} = this.props

    const resultItem = suggestionsList.find(each => each.id === id)

    this.setState({
      searchInput: resultItem.suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          className="google"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-text">
          <div className="search-container">
            <img
              className="search"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              className="search-input"
              placeholder="Search Google"
              type="search"
              onChange={this.searchGoogle}
              value={searchInput}
            />
          </div>
          <ul>
            {searchList.map(each => (
              <SuggestionItem
                key={each.id}
                selectItem={this.selectItem}
                searchItems={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
