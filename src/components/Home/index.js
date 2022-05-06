import {Component} from 'react'
import {v4} from 'uuid'
import InputItem from '../InputItem'
import './index.css'

class Home extends Component {
  state = {inputPhrase: '', charactersList: []}

  onClickAdd = () => {
    const {inputPhrase} = this.state

    const newCharacter = {
      id: v4(),
      chara: inputPhrase,
      lengthOfChara: inputPhrase.length,
    }
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newCharacter],
      inputPhrase: '',
    }))
  }

  onChangeInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase, isClicked, charactersList} = this.state
    const lengthOfList = charactersList.length

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="yellow-section">
            <h1 className="black-heading">
              Count the characters like a boss...
            </h1>
            {lengthOfList !== 0 ? (
              <ul>
                {charactersList.map(each => (
                  <InputItem key={each.id} itemDetails={each} />
                ))}
              </ul>
            ) : (
              <img
                alt="no user inputs"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
              />
            )}
          </div>
          <div className="black-section">
            <form>
              <h1 className="yellow-heading">Character Counter</h1>
              <div className="input-button-container">
                <input
                  className="letters-input"
                  onChange={this.onChangeInputPhrase}
                  type="text"
                  value={inputPhrase}
                  placeholder="Enter the Characters here"
                />
                <button
                  type="submit"
                  className="button"
                  onClick={this.onClickAdd}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
