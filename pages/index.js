import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link> <br />
      <Link href="/product">product</Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
      <Link href="/dashboard">Not found</Link> <br /><br /><br />
      <Link href="/users"> <h2>Users</h2> </Link> <br />

      <Link href="/posts">
        Posts
      </Link>
    



    </>
  );
};

export default Home;
