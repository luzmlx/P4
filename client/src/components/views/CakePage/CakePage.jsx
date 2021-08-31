import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { getAllFlavors } from "../../../services/cakeflavors";
import { deleteCake, getAllCakes, postCake, putCake } from "../../../services/cakes";
import Cakes from "../Cakes/Cakes";
import EditCake from "../EditCake/EditCake";
import CakeCreate from '../CakeCreate/CakeCreate'
import CakeDetail from "../CakeDetail/CakeDetail";

export default function CakePage(props) {
  const [cakes, setCakes] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const history = useHistory()
  const {currentUser} = props

  useEffect(() => {
    const fetchCakes = async () => {
      const cakeList = await getAllCakes();
      setCakes(cakeList);
    };
    fetchCakes();
  }, []);

  useEffect(() => {
    const fetchCakeFlavors = async () => {
      const flavorList = await getAllFlavors();
      setFlavors(flavorList);
    };
    fetchCakeFlavors();
  }, []);

  const handleCreate = async (formData) => {
    const newCake = await postCake(formData)
    setCakes(prevState => [...prevState, newCake])
    history.push('/products/cakes')
  }

  const handleEdit = async (id, formData) => {
    const updateCake = await putCake(id, formData)
    setCakes(prevState => prevState.map(cake => {
      return cake.id === Number(id) ? updateCake : cake
    }))
    history.push('/products/cakes')
  }

  const handleDelete = async (id) => {
    await deleteCake(id)
    setCakes(prevState => prevState.filter(cake => cake.id !== Number(id)))
    history.push('/products/cakes')
  }

  return (
    <div>
      CakePage
      <Switch>
        <Route path="/products/cakes/cake_flavors">
          <h3>Flavors</h3>
        </Route>

        <Route path="/products/cakes/:id/edit">
          <EditCake cakes={cakes} handleEdit={handleEdit} handleDelete={handleDelete} />
        </Route>
        <Route path="/products/cakes/new">
          <CakeCreate handleCreate={handleCreate}/>
        </Route>
        <Route path="/products/cakes/:id">
          <CakeDetail cakeflavors={flavors} />
        </Route>
        <Route path="/products/cakes">
          <Cakes cakes={cakes} currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}
