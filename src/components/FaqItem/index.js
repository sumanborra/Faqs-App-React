// Write your code here.
import {Component} from 'react'
import './index.css'

const FaqItem = props => {
  const {newFaqsList, changeIsPlus} = props
  const {id, questionText, answerText, isPlus} = newFaqsList
  const clickButton = () => {
    changeIsPlus(id)
  }

  //const {newFaqsList} = this.state

  console.log(newFaqsList)
  const buttonIconDisplay = isPlus
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const buttonIconAltText = isPlus ? 'plus' : 'minus'
  const paratext = isPlus === false ? (<><hr className="horizantal-line" />
  <p className="para-answer-text">{answerText}</p></>) : ''
  return (
    <li className="list-item-style">
      <div className="question-container">
        <h1 className="question-heading">{questionText}</h1>
        <button type="button" className="buttn" onClick={clickButton}>
          <img
            src={buttonIconDisplay}
            alt={buttonIconAltText}
            className="button-image"
          />
        </button>
      </div>
      {paratext}
    </li>
  )
}
export default FaqItem
