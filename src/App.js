import React from 'react';
import './App.css';
import TabNav from './components/TabNav';
import Tab from './components/Tab';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Home'
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }
  render() {
    return (
      <div className="App mt-4">
        <TabNav tabs={['Home', 'Settings', 'Profile']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Home' }>
            <p> Ad cillum labore labore commodo eu aliqua proident pariatur ea fugiat laborum fugiat. Et ad fugiat pariatur proident consequat quis cillum ipsum laboris. Eiusmod ipsum aliquip enim cillum deserunt reprehenderit dolor ad magna. </p>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Settings' }>
            <h1>More test text</h1>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Profile' }>
            <ul>
              <li>List test 1</li>
              <li>List test 2</li>
              <li>List test 3</li>
            </ul>
          </Tab>
        </TabNav>
      </div>
    );
  }
}
export default App;
