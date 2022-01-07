import React, { Component } from 'react';
import './style.scss';
import axios from 'axios';

class Portfolio extends Component {

  state = {
    portfolio : []
  }

  componentDidMount(){
    axios.get("db.json").then( res =>{this.setState({ portfolio : res.data.portfolio})})
  }


  render(){

    const {portfolio} = this.state;
    const portfolioList = portfolio.map( (portfolioItem)=>{
      return(
      <div className='gallery col-6 col-sm-3'>
        <img key={portfolio.id} src={portfolioItem.image} alt='gimg'></img>
        <div className='view-overlay'>
          <button className='btn btn-outline-light'>view pic</button>
        </div>
      </div>
      )
    })

    return(
      <div className='portfolio'>
        <h2>Portfolio</h2>
        <div className="responsive-list">
          <div className='responsive-itms active'>all</div>
          <div className='responsive-itms'>html</div>
          <div className='responsive-itms'>photoshop</div>
          <div className='responsive-itms'>mobile</div>
        </div>
        <div className='container-fluidf row'>
          {portfolioList}
        </div>
      </div>
    )
  }
}
export default Portfolio;
