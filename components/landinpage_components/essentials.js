import React from 'react'
import Image from 'next/image'

const Essentials = () => {
    return (
        <div className='flex'>
            <div className='image-container'>

                <Image
                    src="/trending1.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div className='image-container'>
                <Image
                    src="/tranding2.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>

            <div className='image-container'>

                <Image
                    src="/tranding3.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>

        </div>
    )
}

export default Essentials