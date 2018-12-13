import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: ''
    };
  }

  resetState = () => {
    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { adjective1, noun1, adverb, verb, adjective2, noun2 } = this.state;

    if (adjective1 === '' || noun1 === '' || adverb === '' || verb === '' || adjective2 === '' || noun2 === '') return;

    const poemSubmission = this.state;
    this.props.addPoemSubmissionCallback(poemSubmission);
    this.resetState();
  }

  isValid = (stateField) => {
    if(this.state[stateField] === "") {
      return "--invalid"
    } else {
      return ""
    }
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ this.props.player }</h3>

      <form  onSubmit={this.onSubmit} name="player-submission-form" className="PlayerSubmissionForm__form" >

      <div className="PlayerSubmissionForm__poem-inputs">
      The
      <input type="text" name="adjective1" placeholder="adjective" className={`PlayerSubmissionForm__input${this.isValid("adjective1")}`} onChange={this.onFormChange} value={this.state.adjective1} />

      <input type="text" name="noun1" placeholder="noun" className={`PlayerSubmissionForm__input${this.isValid("noun1")}`}
      onChange={this.onFormChange} value={this.state.noun1} />

      <input type="text" name="adverb" placeholder="adverb" className={`PlayerSubmissionForm__input${this.isValid("adverb")}`}
      onChange={this.onFormChange} value={this.state.adverb} />

      <input type="text" name="verb" placeholder="verb" className={`PlayerSubmissionForm__input${this.isValid("verb")}`}
      onChange={this.onFormChange} value={this.state.verb} />

      the
      <input type="text" name="adjective2" placeholder="adjective" className={`PlayerSubmissionForm__input${this.isValid("adjective2")}`}
       onChange={this.onFormChange} value={this.state.adjective2} />

      <input type="text" name="noun2" placeholder="noun" className={`PlayerSubmissionForm__input${this.isValid("noun2")}`}
      onChange={this.onFormChange} value={this.state.noun2} />

      </div>

      <div className="PlayerSubmissionForm__submit">
      <input type="submit" name="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
      </div>
      </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
