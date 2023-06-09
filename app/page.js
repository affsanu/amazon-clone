'use client';
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";


async function productAPI() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = response.json();
  return products;
}

const Home = async () => {
  const products = await productAPI();
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;
