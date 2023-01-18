import React from "react";

export default class PlantPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
    // this.renderHoverState = this.renderHoverState.bind(this);
    // this.renderWaitState = this.renderWaitState.bind(this);
  }

  // renderHoverState(){
  //   return (
  //     <div id="plant-preview">
  //      <header>{props.plantData.commonNames[0]}</header>
  //      <h2>{props.plantData.scientificName}</h2>
  //      <p>{props.plantData.description}</p>
  //     </div>
  //   );
  // }
  // {this.state.hover ? this.renderHoverState() : this.renderWaitState()}

  render() {
    // console.log('this plant is', this.props.plantData.scientificName, 'and the common name is',  this.props.plantData.commonNames[0])
    const sizes=this.props.plantData.sizes.map((obj, i) => {
      Object.keys(obj).forEach((key) => {
        return(
          <li>`${key}` : ${obj[key]}</li>
        )
      })
    })
    return (
      <figure class="gallery-frame">
        <img class="gallery-img" src={`pics/${this.props.plantData.images[0].url}`} alt={this.props.alt}/>
        <figcaption>
          <h4>{this.props.plantData.commonNames[0]}</h4>
          <h4>{this.props.plantData.scientificName}</h4>
          <ul>{sizes}</ul>
        </figcaption>
      </figure>
    )
  }
}
