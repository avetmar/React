import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CategoryDescription() {
  let { catName } = useParams();
  return (
    <div>
      <Link to="/category">Назад</Link>
      <h1>Category: {catName}</h1>
    </div>
  );
}

export default CategoryDescription;
