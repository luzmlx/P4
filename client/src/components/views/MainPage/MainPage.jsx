import React from "react";
import './MainPage.css'


export default function MainPage() {
    return (
        <div className='maindiv'>
            <div className='welcome'>
                <h1 className='h1tag'>Welcome To SweetTreats </h1>
                <p className='aboutdescription'>Do you love cake and want to share your favorite dessert?<br />
                    Well you've come to the right place. <br />
                    In order to Create a cake, first make an account by clicking
                    that Register bottom on the top right corner.<br />
                    If you already have an account, go right ahead and login.<br />
                    *Fun Fact* This image of the cake is one I made for my partners
                    24th birthday.<br /> He loves sweets and matcha so I made a triple layered dark chocolate cake
                    with matcha frosting topped with strawberries.
                </p>
                <img className='img' src='https://i.imgur.com/V4OFA8Z.jpg' alt='matcha cake' />


            </div>
            <div className='contactinfo'>
                <h3 className='h3contactag'>Contact Info</h3>
                <p className='contactdescription'>To contact us for more information about cakes and other sweets
                    here is my email: luzlopez0820@gmail.com </p>
            </div>




        </div>
    )
}