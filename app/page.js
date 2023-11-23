import Artijin from '@/components/landinpage_components/artijin'
import CategorySection from '@/components/landinpage_components/category_section'
import Essentials from '@/components/landinpage_components/essentials'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="text-center py-6">
        <span className="font-extralight text-center">
          Style for Every Identity: Embrace Your True Self with KEON
        </span>
      </div>
      <CategorySection />
      <div className="py-10 px-5">
        <div className='mb-2'>
          <span className='font-semibold ml-4'>
            Shop Essentials
          </span>
        </div>
        <Essentials />
      </div>
      <div className='py-10 px-5'>
        <Artijin />
      </div>
    </>
  )
}
