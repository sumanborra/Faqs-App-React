// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    faqsListt: this.props.faqsList.map(each => ({...each, isPlus: true})),
  }
  changeIsPlus = id => {
    const{faqsListt} = this.state;
    this.setState(prevState => ({
      faqsListt: faqsListt.map(each => {
        console.log(each)
        if (each.id === id) {
          // const{isPlus} = 
          return {...each,isPlus:!each.isPlus}
        }
        return each
      }),
    }))
  }
  render() {
    const {faqsListt} = this.state
    // const {faqsList} = this.props
    // const newObject = {isPlus: true}
    //const newFaqsList = faqsListt.map(eachItem => ({...eachItem, isPlus: true}))
    console.log(faqsListt)
    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading-faqs">FAQs</h1>
          <ul className="list-container">
            {faqsListt.map(eachItem => (
              <FaqItem
                newFaqsList={eachItem}
                key={eachItem.id}
                changeIsPlus={this.changeIsPlus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
