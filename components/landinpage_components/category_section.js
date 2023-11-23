import React from 'react'
import Image from 'next/image'

const CategorySection = () => {
    return (
        <div className='flex'>
            <div>
                <Image
                    src="/bottoms.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div className='mx-1'>
                <Image
                    src="/overshirts.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <Image
                    src="/jacket.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <Image
                    src="/tshirts.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </div>

    )
}

export default CategorySection