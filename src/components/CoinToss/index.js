import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    imgSrc: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({head: prevState.head + 1}))
      this.setState({
        imgSrc: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1}))
      this.setState({
        imgSrc: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {head, tail, imgSrc} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img alt="toss result" src={imgSrc} className="image" />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.onToss}
          >
            Toss Coin
          </button>
          <div className="tossed-details-container">
            <p className="details">Total:{head + tail}</p>
            <p className="details">Heads:{head}</p>
            <p className="details">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
