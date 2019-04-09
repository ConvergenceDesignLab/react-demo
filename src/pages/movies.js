import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { data } = this.props;
    const { Title, Year, Poster } = data;
    return (
      <li>
        <p>{Title}</p>
        <p>{Year}</p>
        <img src={Poster} alt="" />
      </li>
    );
  }
}

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: null
    };
  }

  componentDidMount() {
    fetch("http://omdbapi.com/?apikey=96e13a8&s=Cats")
      .then(response => response.json())
      .then(json => {
        this.setState({
          movieData: json.Search
        });
      })
      .catch(() => console.log("Error!"));
  }

  render() {
    const { movieData } = this.state;

    if (!movieData) return <div>Loading...</div>;

    return (
      <ul>
        {movieData.map(data => (
          <Movie key={data.imdbID} data={data} />
        ))}
      </ul>
    );
  }
}

export default Movies;
