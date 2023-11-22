import React from 'react';
import Form from './component/Form';
import Table from './component/Table';


class App extends React.Component {
  state = {
    cardData: [],
  };

  handleFormSubmit = (data) => {
    this.setState((prevState) => ({
      cardData: [...prevState.cardData, data],
    }));
  };

  render() {
    return (
      <div>
        
        <Form onSubmit={this.handleFormSubmit} />
        <Table data={this.state.cardData} />
      </div>
    );
  }
}

export default App;