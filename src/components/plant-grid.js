import React, { Fragment } from "react";
import PlantPreview from './plant-preview';

// function displayImages(imgArray){
//   const imgs = imgArray.map((e, i) => {
//     return (
//       <img
//         className='plant-card'
//         src={props.img}
//       />
//     )
//   });
//   return imgs
// }
//{displayImages(props.imgs)}

//fetchPlantData() runs on component mount to update the state with list of plants from data.json and updates the state (loading, error) according to the async action

export default class PlantGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: this.props.sortBy,
      plants: '',
      loading: false,
      error: false
    }
    this.fetchPlantData = this.fetchPlantData.bind(this);
    this.sortByAlphabet = this.sortByAlphabet.bind(this);
    this.sortByType = this.sortByType.bind(this);
    this.renderGrid = this.renderGrid.bind(this);
  }

  fetchPlantData(){
    //return new Promise(function(resolve, reject) {
      console.log('changing state to {loading: true}')
      this.setState({loading: true}, () => {
        console.log('fetching data');
        fetch('data.json', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.clone().json())
        .then(res => {
          const plants = res.plants;
          this.setState(
            {plants, loading: false, error: false}, () => {
              console.log('fetchPlantData says state is', this.state)
            })
          return Promise.resolve()
        })
        .catch(err => {
          this.setState(
            {loading: false, error: true}, () => {
              console.log('fetchPlantData says state is', this.state)
            })
          return Promise.reject()
        })
      })
  //  })
  }

  componentDidMount() {
    console.log('componentDidMount is running')
    this.fetchPlantData()
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate is running')
    if (this.props.sortBy !== prevProps.sortBy) {
      this.setState({sortBy:this.props.sortBy}, () => {
        console.log('componentDidUpdate got props', this.props)
      });
    }
  }

  sortByAlphabet(){
    const plants = this.state.plants;
    plants.sort(function(a, b) {
      var plantA = a.commonNames[0].toUpperCase(); // ignore upper and lowercase
      var plantB = b.commonNames[0].toUpperCase(); // ignore upper and lowercase
      if (plantA < plantB) {
        return -1;
      }
      if (plantA > plantB) {
        return 1;
      }
      return 0;
    });
    return plants
  }

  sortByType(){
    //iterate through array of plants.
    //within each plant, iterate through the array of type values (plant.type)
    //if type equals type that user chose, then return that in an array
    console.log(this.state.plants)
    const chosenType = this.state.sortBy;
    const allPlants = this.state.plants;
    const sortedPlants = [];
    allPlants.forEach(plantObject => {
      plantObject.type.forEach(typeValue => {
        if(typeValue === chosenType) {
          sortedPlants.push(plantObject)
        }
      })
    })
    console.log('sortByType is returning', sortedPlants)
    return sortedPlants
  }


  renderGrid(){
    //sortFunction returns an array of the plants, sorted according to the callback

    const sortedPlantArray = (this.state.sortBy == 'alphabetical')? this.sortByAlphabet() : this.sortByType();

    const gridNodes = sortedPlantArray.map((e, i) => {
      if(e.available) {
        return(
          <PlantPreview
            plantData={e}
          />
        )
      }
    })
    return (
      <div class="shop-gallery">
        {gridNodes}
      </div>
    )
  }

  //render() uses conditional logic, guided by the loading/error state to pass either sortByType() or sortByAlphabet() to renderGrid() which returns a grid of plant previews

  render() {
    console.log('render says state is', this.state)
    //if data fetch in loading state or there's no error in data retrieval and this.state.plants doesn't have data, return a "loading message"
    if ((this.state.loading) || (!this.state.error && (this.state.plants === ''))) {
      console.log('you are in a loading state')
      return null
    } else if (this.state.error) {
      //if data fetch received an error, return an "error message"
      console.log('fetching data was not successful');
      return null
    } else {
      console.log('running renderGrid()')
      const plantGrid = this.renderGrid();
      return (
        <Fragment>
          {plantGrid}
        </Fragment>
      )
    }
  }
}
