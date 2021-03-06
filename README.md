

# SweetTreats <!-- omit in toc -->

**Deployed Site**
https://sweettreatss.netlify.app

<br>

## Overview

**Sweet Treats** is a bakery application where you can add a cake item and update it. You do have to be registered in order to make edits and view the cakes


<br>

## MVP



MVP 

  -Full CRUD
  
  -Create User, Sign In, Sign Out
  
  -Build Ruby on Rails server
  
  -Media Query
  
  -Responsive Buttons


### Goals

- Reach MVP and have a working, responsive web application.

<br>

### Libraries and Dependencies


   
|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      Ruby       | Language used to create web application|
|   Bundle   | ensures Ruby Application uses the same exact gems and versions I need |
| Rails | provides code structure |
|     React      | JS Library for building UI |
|  Axios   | For API requests |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/444k4mrA4VeJX2VulFgus8/Sweet-Treats?node-id=0%3A1



#### Component Tree

https://lucid.app/lucidchart/invitations/accept/inv_dcc70f81-9e3f-4458-845d-ca8412888fbb


#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ NavBar.jsx
      |__ HomePage.jsx
      |__ Products.jsx
      |__ SignIn.jsx
      |__ Register.jsx
|__ services/
      |__ ApiConfig

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Navbar    |    H     |     .5 hrs      |      1hrs     |     1hrs    |
| Footer |    H     |     .5 hrs      |      2hrs     |      2hrs    |
| Homepage    |    H     |     2 hrs      |      2hrs     |     2hrs    |
| SignIn/Register |    H     |     2 hrs      |      3hrs     |    3hrs      |
| Sign Out    |    H     |     2 hrs      |      1hrs     |     1hrs    |
| ProductPage |    H     |     2 hrs      |      2.5hrs     |   2.5hrs       |
| Individual Product Pg |    H     |     2 hrs      |      2hrs     |    2hrs      |
| Media Query    |    H     |     4 hrs      |      5hrs     |     5hrs    |
| Deployment    |    H     |     1 hrs      |      1hrs     |     1hrs    |
| Controllers |    H     |     3.5 hrs      |      2hrs     |     2hrs    |
| Migration    |    H     |     2 hrs      |      3hrs     |     3hrs   |
| CSS Styling |    H     |     4 hrs      |      5hrs     |    5hrs      |
| CRUD    |    H     |     3 hrs      |      3.5hrs     |    3.5hrs    |
| Full Auth(front and backend) |    H     |     4 hrs      |      5hrs     |    5hrs      |
| Testing |    H     |     1 hrs      |      1hrs     |      1hrs    |
| TOTAL               |          |     37.5 hrs      |     39hrs     |    39hrs      |



<br>

### Server (Back End)

#### ERD Model



https://drive.google.com/file/d/1NLrBSCbOl1LBagshOpdLcZ9Yi5ejrHC9/view?usp=sharing


<br>

***

## Post-MVP

- Make Menu in Mobile Version of menupage a dropdown menu
- Make Homepage image a slideshow
- Cart Page and functioning Order Buttons
- Add more categories(cupcakes, pie, cookies) with full CRUD 

***

## Code Showcase
```
const handleCreate = async (formData) => {
    const newCake = await postCake(formData)
    setCakes(prevState => [...prevState, newCake])
    history.push('/products/cakes')
  }
```


## Code Issues & Resolutions
- I had issues with my routes so my pages were basically not going where I wanted them to go, but the TAs helped me a lot with getting that fixed and making sure I had full CRUD to ensure I graduate.
