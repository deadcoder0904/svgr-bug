import React from 'react';
import { ReactComponent as SkypeLogo } from "./skype.svg";
import { ReactComponent as TelegramLogo } from "./telegram.svg";

class App extends React.Component {
  render() {
    return (
      <>
        <SkypeLogo width={200} height={200} />
        <TelegramLogo width={200} height={200} />
      </>
    );
  }
}

export default App;
