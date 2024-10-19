import { Button, Card } from 'antd'
import React from 'react'

const ProductsCard = () => {
  return (
    <Card actions={[
      <Button className='w-full h-auto py-3 border-none bg-purple-950 rounded-none text-white hover:bg-red-800 '>Enrol now</Button>,
      <Button className='w-full h-auto py-3 border-none bg-purple-950 rounded-none text-white hover:bg-red-800 '>Enrol now</Button>
    ]} cover={<img alt="example" src="https://api.learningt.com/wp-content/uploads/2023/01/BIPT.png" />}>
      <h3 className='text-xl font-semibold'>Business Intelligence using Power BI and Tableau</h3>
      <div className="flex justify-between">
        <div className="duration">
          <div className=""></div>
          <div className="">
            <div className="title">Duration</div>
            <div className="">30 hours</div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </Card>
  )
}

export default ProductsCard