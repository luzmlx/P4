import { Link } from "react-router-dom";
import './cakes.css'

export default function Cakes(props) {
  const { cakes, currentUser } = props;

  return (
    <div className='cakes-div'>
      <Link to="/products/cakes/new">

        <button className='newcake-button'>Create New Cake</button>

      </Link>

      {cakes.map((cake) => (
        <div className='cake1div' key={cake.id}>
          <Link to={`/products/cakes/${cake.id}`}>
            <p className='cakename-link'>{cake.name}</p>

          </Link>
          {currentUser?.id === cake.user_id && (
            <div className='third-div'>
              <Link to={`/products/cakes/${cake.id}/edit`}>
                <button className='editcake-button'>Edit Cake</button>
              </Link>
            </div>
          )}
        </div>
      ))}

      {/* <Link to="/products/cakes/new">

        <button className='newcake-button'>Create New Cake</button>

      </Link> */}

    </div>
  );
}
