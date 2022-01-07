import React, { Component } from 'react';
import './style.scss';
import axios from 'axios';

class Work extends Component {
  
  state = {
    works : []
  }

  componentDidMount(){
    axios.get("db.json").then( res => {this.setState({ works : res.data.works})})
  }

  render(){

    const {works} = this.state;
    const workList = works.map( (workItem)=>{
      return(
          <div className="col" key={workItem.id}>
            <div className="card h-100">
              <img src={workItem.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{workItem.title} <span className='date'>{workItem.date}</span></h5>
                <p className="card-text">{workItem.paragraf}</p>
                <a href={workItem.link} target="_blank" rel="noreferrer" className="btn btn-outline-dark">viwe site</a>
              </div>
            </div>
          </div>
      )
    })

    return(
      <div className='container'>
        <h2>my work</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto mollitia neque voluptatum! Corrupti accusamus dolore error fugit quod recusandae quisquam, sint consequatur earum, adipisci aut debitis repellat molestias hic?
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {workList}
        </div>
        <hr />
      </div>
    )
  }
}

export default Work;
