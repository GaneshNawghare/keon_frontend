import React from 'react'

const Navbar = () => {
  return (
    <div class="px-5 py-3 flex justify-between  border-b-2">
      <div class="flex items-center">
        <a class="m-2">Bottoms</a>
        <a class="m-2">Tshirts</a>
        <a class="m-2">Overshirt</a>
        <a class="m-2">Jacket</a>
      </div>
      <div class="font-montserrat font-semibold text-3xl p-1">
        <a>K  E  O  N</a>
      </div>
      <div class="flex items-center">
        <a class="m-2">Search</a>
        <a class="m-2">Signin</a>
        <a class="m-2">Wishlist</a>
        <a class="m-2">Shopingbag</a>
      </div>
    </div>
  )
}

export default Navbar