import React from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig); 

function App() {
  return (
    <Authenticator>
      {({ SignOut,User}) => (
        <div className="App">
          <p>
            My App Content.
          </p>
          <button onClick={SignOut}>SignOut</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
