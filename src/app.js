import React from 'react';
import axios from 'axios';
import Gallery from './components/Gallery/gallery';

const NASA_API = 'https://images-api.nasa.gov/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      typingTimeout: 0,
      isFetching: false,
      data: [],
    };
  }

  handleInputChange(event) {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState({
      search: event.target.value,
      typingTimeout: setTimeout(() => {
        this.fetchDataFromAPI();
      }, 1000),
    });
  }

  fetchDataFromAPI() {
    this.setState({ ...this.state, isFetching: true });
    axios
      .get(`${NASA_API}?q=${this.state.search}&media_type=image`)
      .then((response) => {
        console.log(response.data.collection.items);
        this.setState({
          data: response.data.collection.items,
          isFetching: false,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  render() {
    return (
      <>
        <div>NASA images</div>
        <input
          placeholder="e.g. Moon"
          onChange={(event) => this.handleInputChange(event)}
        />
        <Gallery results={this.state.data} />
      </>
    );
  }
}

export default App;
