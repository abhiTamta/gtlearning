import { Divider } from 'antd'
import React from 'react'

const Banner = () => {
    return (
        <section className='bannerSection w-full relative min-h-[500px] bg-red-50 flex items-center'>
            <div className="container mx-auto">
                <div className="w-5/12">
                    <h1 className='text-white text-[42px] font-bold mb-4'>Choose your E-learning combo</h1>
                    <div className="flex items-center gap-3">
                        <div className='text-lg text-white bg-[#8000dc] py-2 px-5'>Select a combo courses</div>
                        <div className="text-lg text-white">/</div>
                        <div className='text-lg text-white bg-[#0065da] py-2 px-5'>Create your own combo courses</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner