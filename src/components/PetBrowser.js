import React from 'react';
import App from './App'
import Pet from './Pet';

class PetBrowser extends React.Component {

  isAdopted = (pet) => (this.props.adoptedPets && this.props.adoptedPets.includes(pet.id) ? true : false)

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet)} /> )}
      </div>
    );
  }
}

export default PetBrowser;
