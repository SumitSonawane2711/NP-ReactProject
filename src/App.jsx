import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  // Simulate fetching data
  useEffect(() => {
    console.log("useEffect");
    
    const fetchData = () => {
      const productData = [
        { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
        { id: 2, name: 'Headphones', price: 100, category: 'Electronics' },
        { id: 3, name: 'Shoes', price: 50, category: 'Fashion' },
        { id: 4, name: 'T-shirt', price: 20, category: 'Fashion' },
      ];

      const uniqueCategories = ['All', ...new Set(productData.map((p) => p.category))];
      
      setProducts(productData);
      setFilteredProducts(productData);
      setCategories(uniqueCategories);
    };

    fetchData();
  }, [selectedCategory]);

  // Filter products by category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };


  return (
  <div className="p-4 max-w-2xl mx-auto bg-red-300">
     <h1 className="text-2xl font-bold mb-4">Products</h1>

     {/* Category Filter */}
     <div className="mb-4 bg-green-300">
      <label htmlFor="category" className="block font-medium mb-2">
        Filter by Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

    {/* Product List */}
    <div className="grid grid-cols-1 gap-4 bg-yellow-300">
      {filteredProducts.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-gray-900 font-bold">Price: ${product.price}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default App
