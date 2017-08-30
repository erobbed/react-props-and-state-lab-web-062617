import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  clickHandler = (event) => event.target.value

  onChangeType = (value) => this.setState({
    filters: {
      type: value
    }
  })

  fetchPets = () => {
    const url = (this.state.filters.type === 'all'  ? '/api/pets' : `/api/pets?type=${this.state.filters.type}` )
    fetch(url).then(res => res.json()).then(res => this.setState({
      pets: res
    }))
  }

  adopt = (id) => this.setState({
    adoptedPets: this.state.adoptedPets.concat([id])
  })

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
