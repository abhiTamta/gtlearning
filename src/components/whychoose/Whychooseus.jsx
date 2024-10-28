import { Card, Col, Row } from 'antd'
import React from 'react'

export const Whychooseus = () => {
  return (
    <div className='w-full bg-[#502c7d] py-12'>
        <div className="container mx-auto">
            <div className="text-center mb-10">
                <h2 className='font-bold text-white text-4xl'>Why choose us?</h2>
            </div>
            <Row className='mb-8' gutter={30} justify={'center'}>
                <Col span={6}>
                    <Card>Whychooseus</Card>
                </Col>
                <Col span={6}>
                    <Card>Whychooseus</Card>
                </Col>
                <Col span={6}>
                    <Card>Whychooseus</Card>
                </Col>                
            </Row>
            <Row className='' gutter={30} justify={'center'}>
                <Col span={6}>
                    <Card>Whychooseus</Card>
                </Col>
                <Col span={6}>
                    <Card>Whychooseus</Card>
                </Col>
                <Col span={6}>
                    <Card>Whychooseus</Card>
                </Col>                
            </Row>
        </div>
    </div>
  )
}
