import axios from 'axios';
import ScrollableFeed from 'react-scrollable-feed';

const categories = axios
  .get('http://127.0.0.1:8000/api/categories')
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error(error);
  });

function CategoriesList() {
  return (
    <ScrollableFeed>
      {categories.map((item) => (
        <div>{item}</div>
      ))}
    </ScrollableFeed>
  );
}

export default CategoriesList;
