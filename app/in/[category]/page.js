'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'
import axios from "axios"

export default function Category({ params }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categoryData, setCategoryData] = useState([
    { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000', like: true },
    { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000', like: false },
    { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000', like: false },
    { name: 'Plain White Tshirt', size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: '/trending1.jpg', rs: '1000', like: false }
  ])

  const categoriesIds = {
    Tshirts: "65327721144eb7a0ab375762"
  }

  // const getCategoryData = async() =>{
  //   const res = await axios.get(`http://localhost:4001/product/categoryId/${categoriesIds[params.category]}`);
  //   console.log(".........................",res.data);
  //   return 
  // }

  // const fetchCategoryData = async () => {
  //   const responce = await axios.get(`http://localhost:4001/category/${categoriesIds.Tshirts}`)
  //   console.log("responce >>>>", responce.data.data.categoryData);
  //   setCategoryData(responce.data.data.categoryData)
  // }

  // useEffect(() => {
  //   fetchCategoryData()
  // }, [params.category]);
  return (
    <>
      <div className="custom-border">

        <div className="flex justify-between">
          <div className="flex">
            <Image
              src="/filter.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
            <p className="m-2">Filter</p>
          </div>
          <p className="flex items-center">{params.category}</p>
          <p className="flex items-center">See 2|4</p>
        </div>

        {
          categoryData.length > 0 ? (
            <>
            <div className="flex justify-center">
              <a className="mx-2, mt-10 mb-4">All</a>
              {
                categoryData[0]?.child_categories?.map((ele) => (
                  <a className="mx-2 mt-10">{ele.name}</a>
                ))
              }
            </div>
            <div className="w-full h-[1px] bg-[#5C6672] bg-opacity-40"></div>
             </>
          ) : (
            <p>Loading...</p>
          )
        }

        {
          categoryData.length > 0 ? (
            <div className="flex justify-center w-100 h-100 flex-wrap p-10">
              {categoryData.map((ele, index) => (
                <>
                  <div key={index} className="flex flex-col items-center mx-1 my-5"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative">
                      <Image src={ele.image} width={540} height={640} alt='' />
                      {hoveredIndex === index && (
                        <div className="absolute bottom-0 left-0 w-full h-[144px] bg-gray-200 bg-opacity-80 p-4">
                          <div className="p-2 font-montserrat font-normal text-base leading-6">Add Size</div>
                          <div className="flex mt-4 gap-6">
                            {ele.size.map((size, idx) => (
                              <button key={idx} className="mr-2 px-2 py-1 font-montserrat font-normal text-base leading-6" onClick={() => handleSizeClick(size)}>
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex w-full h-full justify-between pl-7 pr-7">
                      <div>
                        <p className="mt-5">{ele.name}</p>
                        <p className="mt-2">Rs: {ele.rs}</p>
                      </div>
                      <div className="mt-6">
                        {ele.like ? (
                          <Image src="/like.svg" width={28} height={28} alt='like'/>
                        ) : (
                          <Image src="/unlike.svg" width={28} height={28} alt='unlike'/>
                        )}
                      </div>
                    </div>

                  </div>
                  {index % 2 === 1 && <div className="w-full"></div>}
                </>
              ))}
            </div>


          ) : (
            <p>Loading...</p>
          )
        }

      </div>
    </>
  )
}