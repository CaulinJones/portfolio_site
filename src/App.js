import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import CHeader from './components/CiHeader.js';
import CBottom from './components/CiBot.js';
import CMid from './components/CiCardLayout.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { screenWidth: null };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }
  render() {
    return (
      <div>
          <CHeader />
          <CMid />
          <CBottom />
      </div>
    );
  }
}
export default App;
