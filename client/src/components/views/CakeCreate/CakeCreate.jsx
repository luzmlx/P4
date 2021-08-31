import { useState } from "react";

export default function CakeCreate(props) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
    })
    const { name, description, image, price} = formData
    const { handleCreate } = props

    const handlehange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return(
        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData)
        }}>
            <h3>Create Cake</h3>
            <label>
                Name:
                <input type='text'
                name='name'
                value={name}
                onChange={handleChange} />
                Description:
                <input type='text'
                name='description'
                value={description}
                onChange={handleChange} />
                Image:
                <input type='text'
                name='image'
                value={image}
                onChange={handleChange} />
                Price:
                <input type='number'
                name='price'
                value={price}
                onChange={handleChange} />
            </label>
            <button>
                Create Cake
            </button>
        </form>
    )
}