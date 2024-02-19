'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'
import axios from "axios"
import share from '/public/share.svg'
import truck from '/public/Truck.svg'
import pad from '/public/Pad.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ProductCard = ({ name, sizes, imageUrls, rs }) => {
  const [shopingBag, setShopingBag] = useState(false)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const addtoShop = () => {
    console.log("first")
    setShopingBag(true)
    console.log("shp", shopingBag)
  }
  return (
    <div className="flex flex-col relative">
      {shopingBag && <div className="absolute right-0 w-[35vw] h-[80vh] overflow-y-scroll mt-1 mr-2 bg-white border border-gray-400 scrollbar-none">
        <div>
          <h3 className="text-lg font-semibold p-4">Shopping Bag (2 items)</h3>
        </div>
        <div className="flex items-center p-4 border border-gray-200 rounded-md">
          <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" width={120} height={200} alt="Image 1" className="mr-4" />
          <div className="flex flex-col">
            <h4 className="font-semibold font-Montserrat mb-7">Plain White T-shirt</h4>
            <div className="flex flex-col space-y-1">
              <span>Quantity: 1</span>
              <span>Size: M</span>
              <span>Color: White</span>
            </div>
          </div>
          <div className="flex flex-col justify-between ml-auto gap-20">
            <div className="text-lg font-semibold">Rs. 1000</div>
            <button className="py-1 px-3 font-Montserrat mt-2">Remove</button>
          </div>
        </div>

        <div className="p-2">
          <div className="w-full h-[1px] bg-[#5C6672] bg-opacity-40" />
        </div>
        <div className="flex justify-center pl-4">
          <p>Free home delivery if you add Rs. 6000 to your shopping bag</p>
        </div>
        <div className="flex justify-between p-4">
          <text className="font-semibold font-Montserrat">Subtotal</text>
          <text className="font-semibold font-Montserrat">Rs. 2000</text>
        </div>
        <div className="flex justify-between p-4">
          <text>Delivery</text>
          <text>Rs. 500</text>
        </div>
        <div className="flex justify-center space-x-2">
          <button className="bg-[#FFFFFF] w-[15vw] hover:bg-blue-700 text-black font-bold py-2 px-4 border border-gray-400 ">View Shopping bag</button>
          <button className="bg-[#172332] w-[15vw] hover:bg-blue-700 text-white font-bold py-2 px-4 ">Checkout</button>
        </div>
        <div className="flex justify-center text-align mt-2 mb-3">
          <text className="text-align"><u>Taxes included</u></text>
        </div>
      </div>}
      <div className="flex justify-center w-full">
        <div className="flex flex-row">
          <div className="w-[53vw] ">
            <div className="flex flex-wrap">
              {imageUrls.map((url, index) => (
                <div key={index} className="w-full sm:w-1/2 mb-1" onClick={() => { setShopingBag(false) }}>
                  <img src={url} alt={name} className="w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[45vw] p-5">
            <div className="flex justify-between items-center mb-4" onClick={() => { setShopingBag(false) }}>
              <h3 className="text-xl font-semibold font-Montserrat">{name}</h3>
              <p className="text-xl font-semibold font-Montserrat">Rs {rs}</p>
            </div>
            <div className="flex items-center space-x-2 mb-4" onClick={() => { setShopingBag(false) }}>
              <div className="w-4 h-4 bg-[#5C6672]"></div>
              <span className="text-gray-700 font-Montserrat">White</span>
            </div>
            <a href="#" className="text-grey-500 font-Montserrat"><u>Size Guide</u></a>
            <div className="w-full h-[1px] bg-[#5C6672] bg-opacity-40 my-4" />
            <div className="p-3" onClick={() => { setShopingBag(false) }}>
              {sizes.map((size, index) => (
                <p className="mb-2" key={index}><u>{size}</u></p>
              ))}
            </div>
            <div className="w-full h-[1px] bg-[#5C6672] bg-opacity-40 my-4" />
            <div className="flex mb-2">
              <button className="w-[38vw] bg-[#172332] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addtoShop}>Add to shopping bag</button>
              <span className="flex w-[50px] h-[50px] ml-2 cursor-pointer flex items-center justify-center border border-gray-400"> <Image
                src="/like.svg"
                width={20}
                height={20}
                alt="Product details"
              /></span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
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
      <div className="flex">
        <div className="p-7">
          <h3 className="font-semibold font-Montserrat">Description:</h3>
          <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="flex space-x-2 mt-5">

            <button className="w-[10vw] bg-[#D9D9D9] hover:bg-blue-700 text-white font-bold py-2 px-4">T shirts</button>
            <button className="w-[20vw] bg-[#D9D9D9] hover:bg-blue-700 text-white font-bold py-2 px-4">Oversized tshirts</button>
          </div>
        </div>
        <div className="p-7">
          <h3 className="font-semibold font-Montserrat">Product Care</h3>
          <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="p-5">
        <div>
          <h3 className="font-semibold font-Montserrat">In the same style</h3>
        </div>
        <Carousel className="w-[95vw] mt-2" responsive={responsive} autoPlay={true}>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 1" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 2" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 3" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 3" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 3" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 3" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 3" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 3" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
          <div>
            <img src="https://keonweb.s3.ap-south-1.amazonaws.com/abc.png" alt="Image 3" />
            <div className="pl-4 pr-4">
              <p className="mt-5">Plain White Tshirt</p>
              <p className="mt-2">Rs: 1000</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default function Category({ params }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [categoryData, setCategoryData] = useState([
  //   {name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'},
  //   {name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'},
  //   {name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'},
  //   {name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000'}
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