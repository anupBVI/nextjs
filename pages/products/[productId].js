import { useRouter } from "next/router";
var url = `http://localhost:4000/products`;

const Products = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <h2>
        {product.id}. - {product.title} -
        {product.price}
      </h2>
      <p>{product.description}</p>
      <p>{product.body}</p>
    </div>
  );
};

export default Products;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`${url}/${params.productId}`);
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  //   const response = await fetch(`${url}`);
  //   const data = await response.json();

  //   const paths = data.map((product) => {
  //     return {
  //       params: {
  //         productId: `${product.id}`,
  //       },
  //     };
  //   });
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}
