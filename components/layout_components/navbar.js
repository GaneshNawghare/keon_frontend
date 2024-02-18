
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="px-5 py-3 flex justify-between custom-border">
      <div className="flex items-center">
        <Link href={'/in/Bottoms'} className="m-2">Bottoms</Link>
        <Link href={'/in/Tshirts'} className="m-2">Tshirts</Link>
        <Link href={'/in/Overshirt'} className="m-2">Overshirt</Link>
        <Link href={'/in/Jacket'} className="m-2">Jacket</Link>
        <Link href={'/product/123'} className="m-2">Product</Link>
      </div>
      <div className="font-montserrat font-semibold text-3xl p-1">
        <a href={'/'}>K  E  O  N</a>
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

