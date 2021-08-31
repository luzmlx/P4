import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditCake(props) {
    const [formData,setFormData] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
    })

    const {cakes} = props
    const {id} = useParams()

    useEffect(() => {
        const prefillFormData = () => {
            const cakeItem = cakes.find((cake)=> cake.id === Number(id))
            setFormData({name: cakeItem.name,
            description: cakeItem.description,
            image: cakeItem.image,
            price: cakeItem.price,})
        }
        prefillFormData()
    }, [])

    const handleChange = (e) => {
        // debugger
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
        [name]: value
        }))
    }


    return (
        <form>
            <label>
                Name:
                <input type='text' 
                name='name' 
                value={formData.name} 
                onChange={handleChange} />
            </label>
            <label>
                Description:
                <input type='text' 
                name='description' 
                value={formData.description} 
                onChange={handleChange} />
            </label>
            <label>
                Image:
                <input type='text' 
                name='image' 
                value={formData.image} 
                onChange={handleChange} />
            </label>
            <label>
                Price:
                <input type='number' 
                name='price' 
                value={formData.price} 
                onChange={handleChange} />
            </label>
            <button>Edit</button>
        </form>
    )
}