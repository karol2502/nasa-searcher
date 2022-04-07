import React from 'react';
import axios from 'axios';

import './app.css';

import Gallery from './components/Gallery/gallery';
import Background from './components/Background/background';
import Description from './components/Description/description';
import SearchInput from './components/SearchInput/searchInput';

const NASA_API = 'https://images-api.nasa.gov/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      typingTimeout: 0,
      isFetching: false,
      firstLoad: true,
      pageIsGone: false,
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

  handlePageChange() {
    this.setState({
      pageIsGone: true,
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
          firstLoad: false,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  render() {
    return (
      <div
        className="wrapper"
        style={
          this.state.pageIsGone
            ? { justifyContent: `flex-start` }
            : { justifyContent: `center` }
        }
      >
        <Background in={this.state.firstLoad} />
        <Description
          in={this.state.firstLoad}
          handlePageChange={() => this.handlePageChange()}
        />
        <SearchInput
          in={this.state.firstLoad}
          handleInputChange={(event) => this.handleInputChange(event)}
        />
        {!this.state.isFetching && (
          <Gallery
            results={this.state.pageIsGone ? this.state.data : Array(0)}
          />
        )}
      </div>
    );
  }
}

export default App;
