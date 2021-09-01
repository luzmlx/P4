import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getCake } from '../../../services/cakes';
import { addFlavorToCake } from '../../../services/cakeflavors';
import './cakedetail.css'

export default function CakeDetail(props) {
  const [cakeItem, setCakeItem] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const { id } = useParams();
  const { cakeflavors } = props;
  const history = useHistory()

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
    history.push('/products/cakes')
  };

  return (
    <div>
      <h3 className='cakename'>{cakeItem?.name}</h3>
      <p>{cakeItem?.description}</p>
      <img src={cakeItem?.image} alt='cakeimg'></img>
      <p>${cakeItem?.price}</p>
      {cakeItem?.cake_flavors.map((cakeflavor) => (
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