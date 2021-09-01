import { useState } from "react";
import './cakecreate.css'

export default function CakeCreate(props) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
    })
    const { name, description, image, price} = formData
    const { handleCreate } = props

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return(
        <form
        className='createform'
        onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData)
        }}>
            <h3 className='h3create'>Create Cake</h3>
            <label className='createlabel'>
                
                <input type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={handleChange}
                className='name-input' />
                
                <input type='text'
                className='description-input'
                placeholder='Description'
                name='description'
                value={description}
                onChange={handleChange} />
                
                <input type='text'
                placeholder='Image'
                className='image-input'
                name='image'
                value={image}
                onChange={handleChange} />
                
                <input type='number'
                placeholder='Price'
                className='price-input'
                name='price'
                value={price}
                onChange={handleChange} />
            </label>
            <button className='create-button'>
                Create Cake
            </button>
        </form>
    )
}