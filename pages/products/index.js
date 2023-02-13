import Link from "next/link";

var url = `http://localhost:4000/products`;
const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>List of products</h1>
      <br />
      {products.map((product, index) => {
        return (
          <div key={product.id}>
            <Link href={`products/${product.id}`}>
              <h3> 
              
                {product.id} {product.title} {product.price}
              </h3>
            </Link>
            <br />
            <hr />
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default ProductsList;


  

export async function getStaticProps() {
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
