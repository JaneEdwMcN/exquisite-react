import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poemSubmissions: [],
      recentSubmission: "",
      player: 1,
      gameEnded: false
    };
  }

  addPoemSubmission = (poemSubmission) => {
    let submission = ""
    for (var word in poemSubmission) {
      if (word === "adjective1"){
        submission += "The "
      } else if (word === "adjective2") {
        submission += "the "
      }
      submission += poemSubmission[word] + " "
    }
    submission += "."

    const { poemSubmissions } = this.state
    let { recentSubmission } = this.state
    recentSubmission = poemSubmission
    let { player } = this.state
    player += 1
    poemSubmissions.push(submission)
    this.setState({
      poemSubmissions,
      recentSubmission,
      player
    })
  }

  endGame = (yes) => {
    let { gameEnded } = this.state
    gameEnded = yes
    this.setState({
      gameEnded
    })
  }

  render() {
    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
      { exampleFormat }
      </p>

      { this.state.gameEnded ? "" : <RecentSubmission recentSubmission={this.state.recentSubmission}/> }

      { this.state.gameEnded ? "" : < PlayerSubmissionForm
      addPoemSubmissionCallback={this.addPoemSubmission}
      player={this.state.player}/> }

      <FinalPoem
      finalPoem={this.state.poemSubmissions}
      endGameCallback={this.endGame}/>

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
