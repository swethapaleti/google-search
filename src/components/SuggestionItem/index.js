import './index.css'

const SuggestionItem = props => {
  const {searchItems, selectItem} = props
  const {id, suggestion} = searchItems

  const updateItem = () => {
    selectItem(id)
  }
  return (
    <li className="text-item">
      <p className="text">{suggestion}</p>
      <button className="btn" type="button" onClick={updateItem}>
        <img
          className="arrow"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
