import Image from 'next/image'
import React from 'react'

const Artijin = () => {
  return (
    <div className='flex'>
    <div className='image-container_artijin'>

        <Image
            src="/artjin1.svg"
            width={600}
            height={600}
            alt="Picture of the author"
        />
    </div>
    <div className='bg-[#E2E0E0]'>

    </div>

    {/* <div className='image-container_artijin'>
        <Image
            src="/Artigen_jacket 1.svg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
    </div> */}

</div>
  )
}

export default Artijin