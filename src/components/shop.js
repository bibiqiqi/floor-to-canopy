import React from 'react';
import PlantGrid from './plant-grid.js';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'alphabetical'
    }
    this.handleSortByClick = this.handleSortByClick.bind(this);
  }

  handleSortByClick(e) {
    this.setState({sortBy:e.target.value}, () => {
        console.log('handleSortByClick changed state to', this.state)
      })
  }

  render() {
    return (
      <section id="shop">
        <div>
         <h1>Available by Local Pickup Only</h1>
         <p>contact me <a>here</a> to arrange
         I will respond within 24 hours
         </p>
        </div>
       <h2>sort by</h2>
        <div>
          <button
            className='plant-sort-button clickable'
            onClick={(e) => this.handleSortByClick(e)}
            value="alphabetical"
          >
            alphabetical
          </button>
          <label for="plant-type">type of plant</label>
          <select
            id="plant-type"
            name="type"
            onChange={(e) => this.handleSortByClick(e)}
          >
            <option value="greens">Edible Greens</option>
            <option value="fruiting">Fruiting Plants</option>
            <option value="herbs">Medicinal and Culinary Herbs</option>
            <option value="pioneer">Pioneer Plants</option>
          </select>
          <button
            className='plant-sort-button clickable'
            onClick={(e) => this.handleSortByClick(e)}
            value='type'
          >
           type
          </button>
        </div>
        <PlantGrid
          sortBy={this.state.sortBy}
        />
      </section>
    );
  }
}
