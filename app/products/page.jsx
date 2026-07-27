import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <div>Products</div>
        <Image 
        src="/images/batman.jpg" 
        alt="Tool Logo" 
        width={80} 
        height={80} 
        priority={true} // Optional: for hero images to skip lazy loading
        />
    </>
  )
}


const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

const products = [
  { id: 1, name: "Product A", price: 19.99 },
  { id: 2, name: "Product B", price: 29.99 },
];

const getUsers = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() =>{
      if (users.length > 0) {
        resolve(users);
      } else {
        reject(new Error("Failed to fetch users"));
      }
    }, 2000) ;
  });
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        resolve(products);
      } else {
        reject(new Error("Failed to fetch products"));
      }
    }, 60000);
  });
};


async function fetchData() {
  const data = await Promise.all([
    getUsers(),
    getProducts(),
  ]);

  console.log(data[0]); 
  console.log(data[1]); 
}

fetchData();



export default page