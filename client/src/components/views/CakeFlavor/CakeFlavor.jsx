import React from 'react'


export default function CakeFlavor(props) {
    const { cakeflavors} = props

    return (
        <div>
            <h5>Cake Flavors</h5>
            {cakeflavors.map((cakeflavor) => (
                <p key={cakeflavor.id}>{cakeflavor.name}</p>
            ))}
        </div>
    )
}