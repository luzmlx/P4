import { useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { getAllFlavors } from "../../../services/cakeflavors";
import {getAllCakes} from '../../../services/cakes'
import EditCake from "../EditCake/EditCake";

export default function CakePage() {
    const [cakes, setCakes] = useState([])
    const [flavors, setFlavors] = useState([])

    useEffect(() => {
        const fetchCakes = async ()=> {
            const cakeList = await getAllCakes()
            setCakes(cakeList)
        }
        fetchCakes()
    }, [])

    useEffect(() => {
        const fetchCakeFlavors = async ()=> {
            const flavorList = await getAllFlavors()
            setFlavors(flavorList)
        }
        fetchCakeFlavors()
    }, [])

    return (
        <div>
        <Switch>
            <Route path='/products/cakes/cake_flavors'>
                <h3>
                    Flavors
                </h3>
            </Route>
            
            <Route path='products/cakes/:id/edit'>
                <EditCake cakes={cakes}/>
                </Route>
                <Route path='products/cakes/new'>
                <h3>Create Cakes</h3>
                </Route>
                <Route path='products/cakes/:id'>
                <h3>Cake details</h3>
                </Route>
                <Route path='products/cakes'>
                <h3>Cake list</h3>
                </Route>
        </Switch>
        </div>
    )
}