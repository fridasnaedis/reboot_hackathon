import React, { Component } from "react";
import "./detail.css";

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="container">
          <div className="why">
            <h1>Why have a hackathon</h1>
            <p>
              Um háskóla íslands að hann sé að verða framsæknari og vill gefa
              nemendum öðruvísi tækifæri til að læra - einn af stærstu samstarfs
              og styrktaraðilum. Honum að þakka að við getum haldið þetta. Tala
              jafnvel aðeins um VONs.w
            </p>
          </div>
          <div className="who">
            <h1>Who is this for</h1>
            <p>
              Segja líka hverjir geta tekið þátt og hvaða hóp við erum að
              sækjast eftir að taki þátt. Segja að allir geti
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
