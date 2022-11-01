import React, { useState } from 'react';

const AnimalList = () => {
    const [animals, setAnimals] = useState([
        {id: 1, species: 'dog', name: 'Rex', dateOfBirth: new Date()},
        {id: 2, species: 'horse', name: 'Mrki', dateOfBirth: new Date()},
        {id: 3, species: 'bird', name: 'Pevacica', dateOfBirth: new Date()},
        {id: 4, species: 'cat', name: 'Mica', dateOfBirth: new Date()},
        {id: 5, species: 'snake', name: 'Jeca', dateOfBirth: new Date()},
        {id: 6, species: 'dog', name: 'Dzeki', },
    ]);

    const handleRemoweAnimal = (animalIndex) => {
        setAnimals([
            ...animals.slice(0, animalIndex), 
            ...animals.slice(animalIndex + 1)])
    }

    const handleAnimalMoveToTop = (animalIndex) => {
        setAnimals([
            animals[animalIndex],
            ...animals.splice(0, animalIndex),
            ...animals.splice(animalIndex + 1)
        ]);
    }

  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Species</th>
                <th>Name</th>
                <th>Date Of Birth</th>
            </tr>
        </thead>
        <tbody>
            {animals.map((animal, index) => (
                <tr key={animal.id}>
                    <th>{animal.species}</th>
                    <th>{animal.name}</th>
                    <th>{animal.dateOfBirth ? animal.dateOfBirth.toDateString() : 'Nepoznat'}</th>
                    <th><button onClick={() => handleRemoweAnimal(index)}>Remove Animal</button></th>
                    <th><button onClick={() => handleAnimalMoveToTop(index)}>Mov To Top</button></th>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalList
