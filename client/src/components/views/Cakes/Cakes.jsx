import { Link } from "react-router-dom";

export default function Cakes(props) {
  const { cakes, currentUser } = props;

  return (
    <div>
      
      {cakes.map((cake) => (
        <div key={cake.id}>
          <Link to={`/products/cakes/${cake.id}`}>
            <p>{cake.name}</p>
          </Link>
          {currentUser?.id === cake.user_id && (
            <div>
              <Link to={`/products/cakes/${cake.id}/edit`}>
                <button>Edit Cake</button>
              </Link>
            </div>
          )}
        </div>
      ))}
      <Link to="/products/cakes/new">
        <button>Create New Cake</button>
      </Link>
    </div>
  );
}
