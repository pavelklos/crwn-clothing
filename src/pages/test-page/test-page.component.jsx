import React from 'react';

const TestPage = (props) => (
  <div style={{ border: '1px solid red', padding: 10 }}>
    <h1>TEST PAGE</h1>

    <h2 style={{ color: 'red', marginBottom: 0 }}>Firebase : <u>crwn-db-pavel-klos</u></h2>
    <a href="https://console.firebase.google.com/project/crwn-db-pavel-klos/authentication" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}><b>Firebase 'crwn-db-pavel-klos' : Authentication</b></a><br />
    <a href="https://console.firebase.google.com/project/crwn-db-pavel-klos/authentication/users" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}><b>Firebase 'crwn-db-pavel-klos' : Authentication (Users)</b></a><br />
    <a href="https://console.firebase.google.com/project/crwn-db-pavel-klos/database" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}><b>Firebase 'crwn-db-pavel-klos' : Database</b></a><br /><br />

    <span>props.match.url <b>{props.match.url}</b></span><br />
    <span>props.match.path <b>{props.match.path}</b></span><br />
    <span>props.match.isExact <b>{props.match.isExact.toString()}</b></span><br />
    <span>props.match.params <b>{Object.keys(props.match.params).length}</b></span><br />
    {Object.keys(props.match.params).map((keyName, i) => (
      <div className="travelcompany-input" key={i}>
          <span className="input-label"> - key: <b>{i}</b> name: <b>{props.match.params[keyName]}</b></span>
      </div>
    ))}
    <span>props.location.pathname <b>{props.location.pathname}</b></span><br />
  
    <h1>příliš žluťoučký kůň úpěl ďábelské ódy 1234567890</h1>
    <h1>PŘÍLIŠ ŽLUŤOUČKÝ KŮŇ ÚPĚL ĎÁBELSKÉ ÓDY `@#$~^&*{`{}`}°%</h1>
    <span>process.env.PUBLIC_URL <b>{process.env.PUBLIC_URL + '/photos/2019-07-01-brdy/DSC_8101.jpg'}</b></span><br />
    <span>window.location.origin <b>{window.location.origin + '/photos/2019-07-01-brdy/DSC_8101.jpg'}</b></span><br />
    <img style={{ width: 500 }} src="/photos/2019-07-01-brdy/DSC_8101.jpg" alt="brdy-2019" />

  </div>
)

export default TestPage;