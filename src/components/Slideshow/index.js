import React from "react";
import "./index.css"; 


class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === images.length - 1
          ? 0
          : prevState.currentIndex + 1,
    }));
  };

  prevSlide = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? images.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="slider-container">
        <h1>Slideshow</h1>
        <img
          className="slider-image"
          src={images[currentIndex]}
        />
        <div className="slider-controls">
          <button onClick={this.prevSlide} className="slider-button">
            ◀
          </button>
          <span className="slider-indicator">
            {currentIndex + 1}/{images.length}
          </span>
          <button onClick={this.nextSlide} className="slider-button">
            ▶
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow;


