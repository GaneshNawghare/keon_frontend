'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'
import axios from "axios"
import share from '/public/share.svg'
import truck from '/public/Truck.svg'
import pad from '/public/Pad.svg'


const ProductCard = ({ name, sizes, imageUrls, rs }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row">
        <div className="w-[53vw] ">
          <div className="flex flex-wrap">
            {imageUrls.map((url, index) => (
              <div key={index} className="w-full sm:w-1/2 mb-1">
                <img src={url} alt={name} className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[45vw] p-5">
          <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold font-Montserrat">{name}</h3>
            <p className="text-xl font-semibold font-Montserrat">Rs {rs}</p>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-[#5C6672]"></div>
            <span className="text-gray-700 font-Montserrat">White</span>
          </div>
          <a href="#" className="text-grey-500 font-Montserrat"><u>Size Guide</u></a>
          <div className="w-full h-[1px] bg-[#5C6672] bg-opacity-40 my-4" />
          <div className="p-3">
            {sizes.map((size, index) => (
              <p className="mb-2" key={index}><u>{size}</u></p>
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#5C6672] bg-opacity-40 my-4" />
          <div className="flex mb-2">
            <button className="w-[38vw] bg-[#172332] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to shopping bag</button>
            <span className="flex w-[50px] h-[50px] ml-2 cursor-pointer flex items-center justify-center border border-gray-400"> <Image
                src="/like.svg"
                width={20}
                height={20}
                alt="Product details"
              /></span>
          </div>
          <div className="flex justify-between">
            <div class="flex items-center space-x-2">
              <Image
                src="/Pad.svg"
                width={20}
                height={20}
                alt="Product details"
              />
              <text>Product details</text>
            </div>
            <div class="flex items-center space-x-2">
              <text>Share</text>
              <Image
                src="/share.svg"
                width={20}
                height={20}
                alt="Product details"
              />
            </div>
          </div>
          <div class="flex items-center space-x-2 mt-3">
            <Image
              src="/Truck.svg"
              width={30}
              height={30}
              alt="Product details"
            />
            <text>Delivery & Returns</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Category({ params }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [categoryData, setCategoryData] = useState([
  //   { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'},
  //   { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'},
  //   { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'},
  //   { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'}
  // ])

  const [categoryData, setCategoryData] = useState([
    {
      name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: ['https://keonweb.s3.ap-south-1.amazonaws.com/abc.png',
        'https://keonweb.s3.ap-south-1.amazonaws.com/abc.png',
        'https://keonweb.s3.ap-south-1.amazonaws.com/abc.png',
        'https://keonweb.s3.ap-south-1.amazonaws.com/abc.png'], rs: '1000'
    },
  ])

  return (
    <>
      <div>
        {categoryData.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            sizes={product.size}
            imageUrls={product.image}
            rs={product.rs}
          />
        ))}
      </div>
    </>
  )
}