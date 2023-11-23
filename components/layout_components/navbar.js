import React from 'react'

const Navbar = () => {
  return (
    <div className="px-5 py-3 flex justify-between  border-b-2">
      <div className="flex items-center">
        <a className="m-2">Bottoms</a>
        <a className="m-2">Tshirts</a>
        <a className="m-2">Overshirt</a>
        <a className="m-2">Jacket</a>
      </div>
      <div className="font-montserrat font-semibold text-3xl p-1">
        <a>K  E  O  N</a>
      </div>
      <div className="flex items-center">
        <a className="m-2">Search</a>
        <a className="m-2">Signin</a>
        <a className="m-2">Wishlist</a>
        <a className="m-2">Shopingbag</a>
      </div>
    </div>
  )
}

export default Navbar