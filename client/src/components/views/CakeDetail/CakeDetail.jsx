import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCake } from '../services/cakes';
import { addFlavorToCake } from '../services/cakeflavors';

export default function CakeDetail(props) {
  const [cakeItem, setCakeItem] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const { id } = useParams();
  const { cakeflavors } = props;

  useEffect(() => {
    const fetchCakeItem = async () => {
      const cakeData = await getCake(id);
      setCakeItem(cakeData);
    };
    fetchCakeItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedFlavor(value);
  };

  // adding the flavor to our food
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cakeItem = await addFlavorToCake(id, selectedFlavor);
    setCakeItem(cakeItem);
  };

  return (
    <div>
      <h3>{cakeItem?.name}</h3>
      {cakeItem?.cakeflavors.map((cakeflavor) => (
        <p key={cakeflavor.id}>{cakeflavor.name}</p>
      ))}
      {/* flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          
          <option disabled value='default'>
            -- Select a Flavor --
          </option>
          

          {cakeflavors.map((cakeflavor) => (
            
            <option value={cakeflavor.id}>{cakeflavor.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}