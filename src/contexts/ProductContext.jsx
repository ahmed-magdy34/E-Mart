import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();
function ProductsProvider({ children }) {
  ////////////////////////////
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingError, setFetchingError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  /////////////////////////////////////////
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  /////////////////////
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(products); // Reset to the original list when input is empty
      return;
    }

    if (searchQuery.length > 2) {
      const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(searchedProducts);
    }
  }, [searchQuery, products]);
  ///////////////////////////////////////
  const filterCategories = async (cat) => {
    if (!cat) {
      setFilteredProducts(products);
    }
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${cat}`
    );
    const data = await res.json();
    setFilteredProducts(data);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        searchQuery,
        setSearchQuery,
        filteredProducts,
        filterCategories,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("cities context was used outside the scope");
  return context;
}
export { ProductsProvider, useProducts };
