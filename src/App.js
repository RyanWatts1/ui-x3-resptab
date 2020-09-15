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
            <p>Commodo tempor quis enim officia labore quis duis esse. Culpa dolore culpa esse laboris non reprehenderit et et ut. Cupidatat cillum cupidatat quis voluptate amet enim voluptate proident sunt aute. Ea mollit eiusmod est ea commodo nostrud eu. Ad dolore culpa labore duis.

Adipisicing pariatur eu Lorem ad labore velit exercitation duis excepteur labore culpa esse. Qui laboris consectetur ex quis pariatur ut in esse ex. Cupidatat non voluptate Lorem duis culpa aliquip consequat. Consequat enim exercitation culpa ut dolor excepteur est.

Pariatur dolore dolore voluptate magna sit anim. Qui eu aliquip mollit incididunt aliqua reprehenderit. Nostrud cupidatat et dolore ad ea. Deserunt dolor consequat quis sunt Lorem. Fugiat aute laboris amet velit elit deserunt ut adipisicing pariatur.

Dolor commodo excepteur aliqua officia non velit eu duis. Tempor exercitation minim amet culpa est et aute in voluptate anim consectetur minim. Sit elit fugiat do amet voluptate incididunt qui consectetur veniam ullamco in magna.</p>
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
