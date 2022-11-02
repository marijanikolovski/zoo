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

    const sectorAnima = ['birds', 'snakes', 'mammals']

    const [species, setSpecies] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [sector, setSector] = useState('');

    const handleRemoweAnimal = (animalIndex) => {
        setAnimals([
            ...animals.slice(0, animalIndex), 
            ...animals.slice(animalIndex + 1)])
    }

    const handleAnimalMoveToTop = (animalIndex) => {
        setAnimals([
            animals[animalIndex],
            ...animals.slice(0, animalIndex),
            ...animals.slice(animalIndex + 1)
        ]);
    }

    const addAnimal = (e) => {
        const id = Math.floor(Math.random() * 10000 +1)

        e.preventDefault();
        setAnimals([...animals, { id: id, sector: sector, species: species, name: name, dateOfBirth: new Date(dateOfBirth) }])
    }


  return (
    <div>
        <form onSubmit={addAnimal}>
            <label>Animal species:</label>
            <select 
                onChange={e => setSector(e.target.value)}
            >
                {sectorAnima.map((sector) => 
                    <option >
                        {sector}
                    </option>
                )}
            </select>
            <label>Species</label>
            <input 
                type="text"  
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
            />
            <label>Name</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <label>Date of birth</label>
            <input 
                type="date" 
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <button type='submit'>Add Animal</button>
        </form>
      <table>
        <thead>
            <tr>
                <th>Sector</th>
                <th>Species</th>
                <th>Name</th>
                <th>Date Of Birth</th>
            </tr>
        </thead>
        <tbody>
            {animals.map((animal, index) => (
                <tr key={animal.id}>
                    <th>{animal.sector ? animal.sector: 'Unknown'}</th>
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
