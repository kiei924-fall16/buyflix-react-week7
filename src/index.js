// React
var React = require('react');
var ReactDOM = require('react-dom');

// Sample data
var SampleData = require('./movie-data');           // SampleData.movies
var LotsMoreMovies = require('./lots-more-movies'); // LotsMoreMovies.movies

// Firebase
var Rebase = require('re-base')
var base = Rebase.createClass({
  databaseURL: "https://buyflix-d7037.firebaseio.com/",
});

var MovieList = React.createClass({
  renderMovie: function(movie) {
    return (
      <Movie key={movie.id}
             movie={movie}
             movieClicked={this.props.movieClicked} />
    )
  },
  render: function() {
    return (
      <div className="movies col-sm-8">
        <div className="row">
          {this.props.movies.map(this.renderMovie)}
        </div>
      </div>
    )
  }
})

var Movie = React.createClass({
  movieClicked: function() {
    this.props.movieClicked(this.props.movie)
  },
  render: function() {
    return (
      <div className="col-sm-2">
        <div className="thumbnail">
          <img onClick={this.movieClicked} role="presentation" className="img-responsive" src={this.props.movie.poster} />
          <div className="caption">
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.genre}</p>
            <p>{this.props.movie.runtime}</p>
          </div>
        </div>
      </div>
    )
  }
})

var Header = React.createClass({
  render: function() {
    return (
      <div className="header row">
        <div className="col-sm-9">
          <h1>Buyflix</h1>
        </div>
        <div className="hello col-sm-3 text-center">
          <h2>Hi, {this.props.name}!</h2>
        </div>
      </div>
    )
  }
})

var SortBar = React.createClass({
  render: function() {
    return (
      <div className="sort row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <li className="active"><a href="#">Latest Releases</a></li>
            <li><a href="#">A-Z</a></li>
            <li className="nav-text pull-right">{this.props.movieCount} movies</li>
          </ul>
        </div>
      </div>
    )
  }
})

var MovieDetails = React.createClass({
  movieWatched: function() {
    this.props.movieWatched(this.props.movie)
  },
  render: function() {
    return (
      <div className="details col-sm-4">
        <h3>
          <a href="#" className="btn btn-success" onClick={this.props.loadMoreMoviesClicked}>Reset movie list!</a>
          &nbsp;
          <a href="#" className="btn btn-warning" onClick={this.movieWatched}> I watched it!</a>
        </h3>
        <div className="row">
          <div className="col-sm-6">
            <img role="presentation" className="poster img-responsive" src={this.props.movie.poster} />
          </div>
          <div className="col-sm-6">
            <h3>{this.props.movie.title}</h3>
            <p className="rating">{this.props.movie.rating}</p>
            <p><strong>Genre:</strong> {this.props.movie.genre}</p>
            <p><strong>Runtime:</strong> {this.props.movie.runtime}</p>
            <p><strong>Released:</strong> {this.props.movie.released}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h4>Summary</h4>
            <p>{this.props.movie.plot}</p>
            <h4>Cast</h4>
            <p>{this.props.movie.cast}</p>
          </div>
        </div>
      </div>
    )
  }
})

var NoCurrentMovie = React.createClass({
  render: function() {
    return (
      <h3>Please select a movie from the list!</h3>
    )
  }
})

var App = React.createClass({
  movieClicked: function(movie) {
    this.setState({
      currentMovie: movie
    })
  },
  movieWatched: function(movie) {
    var existingMovies = this.state.movies
    var moviesWithWatchedMovieRemoved = existingMovies.filter(function(existingMovie) {
      return existingMovie.id !== movie.id
    })
    this.setState({
      movies: moviesWithWatchedMovieRemoved,
      currentMovie: null
    })
  },
  loadMoreMoviesClicked: function() {
    var existingMovies = SampleData.movies
    var newMoviesToAdd = LotsMoreMovies.movies
    var allTheMovies = existingMovies.concat(newMoviesToAdd)
    this.setState({
      movies: allTheMovies
    })
  },
  renderMovieDetails: function() {
    if(this.state.currentMovie == null) {
      return <NoCurrentMovie />
    } else {
      return <MovieDetails movie={this.state.currentMovie}
                           loadMoreMoviesClicked={this.loadMoreMoviesClicked}
                           movieWatched={this.movieWatched} />
    }
  },
  getInitialState: function() {
    return {
      movies: SampleData.movies,
      currentMovie: null
    }
  },
  componentDidMount: function() {
    base.syncState('/movies', {
      context: this,
      state: 'movies',
      asArray: true
    })
  },
  render: function() {
    return (
      <div>
        <Header name="Brian" />
        <SortBar movieCount={this.state.movies.length} />
        <div className="main row">
          <MovieList movies={this.state.movies} movieClicked={this.movieClicked} />
          {this.renderMovieDetails()}
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
