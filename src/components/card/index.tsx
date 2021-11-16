import React, { useState } from 'react';
import './index.css';
import { BREED_COUNT, BLOODLINES, PEGA_TYPES } from '../../constants'

type CardProps = {
  type: string;
}

const Card = ({ type }: CardProps) => {
  const [bloodLine, setBloodline] = useState<string>('Hoz');
  const [pegaType, setPegaType] = useState<string>('Founder');
  const [breedCount, setBreedCount] = useState<number>(0)
  console.log(bloodLine)

  return (
    <>
        <div className="card">
            <div className="title">
                <h1> {type} </h1>
            </div>
            <div className="input">
                <h3> Bloodline </h3>
                <select onChange={() => setBloodline}>
                    {BLOODLINES.map((bloodLine) => <option >{bloodLine}</option>)}
                </select>
            </div>
            <div className="input">
                <h3> Pega type </h3>
                <select onChange={() => setPegaType}>
                    {PEGA_TYPES.map((type) => <option >{type}</option>)}
                </select>
            </div>
            <div className="input">
                <h3> Breed Count </h3>
                <select onChange={() => setBreedCount}>
                    {BREED_COUNT.map((quantity) => <option >{quantity}</option>)}
                </select>
            </div>
        </div>
    </>
  );
}

export default Card;
