import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const makeSentence = (submission) => {
    let sentence = ""
    for (var word in submission) {
      if (word === "adjective1"){
        sentence += "The "
      } else if (word === "adjective2") {
        sentence += "the "
      }
      sentence += submission[word] + " "
    }
    sentence += "."
    return sentence
  }

  if (props.recentSubmission) {
    return (
      <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ makeSentence(props.recentSubmission) }</p>
      </div>
    );
  }
  return ""
}

export default RecentSubmission;
