'use client'
import { useEffect , useState } from "react"
import Image from 'next/image'
import axios from "axios"

export default function Category({ params }) {

  const [categoryData , setCategoryData ] = useState([]) 

  const categoriesIds = {
    Tshirts : "65327721144eb7a0ab375762"
  }

  // const getCategoryData = async() =>{
  //   const res = await axios.get(`http://localhost:4001/product/categoryId/${categoriesIds[params.category]}`);
  //   console.log(".........................",res.data);
  //   return 
  // }

  const fetchCategoryData = async () => {
    const responce = await axios.get(`http://localhost:4001/category/${categoriesIds.Tshirts}`)
    console.log("responce >>>>",responce.data.data.categoryData);
    setCategoryData(responce.data.data.categoryData)
  }

  useEffect(() => {
    fetchCategoryData()
  },[params.category]);
  return (
    <>
      <div className = "custom-border">

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
          categoryData.length>0 ? (
            <div className="flex justify-center">
              <a className="mx-2, mt-10">All</a>
              {
                categoryData[0].child_categories.map((ele)=>(
                  <a className="mx-2 mt-10">{ele.name}</a>
                ))
              }
            </div>
          ) : (
            <p>Loading...</p>
          )
        }

      </div>
    </>
  )
}