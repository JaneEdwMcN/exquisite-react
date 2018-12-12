import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      finalPoem: "",
      hideButton: false
    };
  }

  onInputButtonClick = (event) => {
    if (this.props.finalPoem.length > 0) {
      const updatedState = {};
      updatedState["finalPoem"] = this.createFinalPoem(this.props.finalPoem);
      updatedState["hideButton"] = true;

      this.setState(updatedState);
      this.props.endGameCallback(true);
    }
  }

  createFinalPoem = (poems) => {
    const poemParagraphs = poems.map((poem, index) => {
      return (
        <p key={index}>{poem} </p>
      )
    });

    return(
      <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {poemParagraphs}
      </section>
    )
  }

  render (){
    if (this.state.hideButton ){
      return(
        <div className="FinalPoem">
        {this.state.finalPoem}
        </div>)
    }
    return(
      <div className="FinalPoem">
      <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.onInputButtonClick}/>
      </div>
      </div>)
    }

  }

  export default FinalPoem;
