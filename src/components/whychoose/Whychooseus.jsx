import { Card, Col, Row } from 'antd'
import icon1 from '../../assets/images/graduation.png'

export const Whychooseus = () => {
  return (
    <div className='w-full bg-[url("../../assets/images/map_bg.png")] bg-slate-50 py-12'>
        <div className="container mx-auto">
            <div className="text-center mb-10">
                <h2 className='font-bold text-4xl'>Why choose us?</h2>
            </div>
            <Row className='mb-8' gutter={30} justify={'center'}>
                <Col span={6}>
                    <Card className='bg-purple-100'>
                        <div className="cardIcon w-20 mx-auto mb-5">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="cardTitle font-bold text-center text-xl mb-3">Lorem, ipsum dolor.</div>
                        <div className="cardDiscription text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className='bg-purple-100'>
                        <div className="cardIcon w-20 mx-auto mb-5">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="cardTitle font-bold text-center text-xl mb-3">Lorem, ipsum dolor.</div>
                        <div className="cardDiscription text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className='bg-purple-100'>
                        <div className="cardIcon w-20 mx-auto mb-5">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="cardTitle font-bold text-center text-xl mb-3">Lorem, ipsum dolor.</div>
                        <div className="cardDiscription text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                    </Card>
                </Col>                
            </Row>
            <Row className='' gutter={30} justify={'center'}>
                <Col span={6}>
                    <Card className='bg-purple-100'>
                        <div className="cardIcon w-20 mx-auto mb-5">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="cardTitle font-bold text-center text-xl mb-3">Lorem, ipsum dolor.</div>
                        <div className="cardDiscription text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className='bg-purple-100'>
                        <div className="cardIcon w-20 mx-auto mb-5">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="cardTitle font-bold text-center text-xl mb-3">Lorem, ipsum dolor.</div>
                        <div className="cardDiscription text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className='bg-purple-100'>
                        <div className="cardIcon w-20 mx-auto mb-5">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="cardTitle font-bold text-center text-xl mb-3">Lorem, ipsum dolor.</div>
                        <div className="cardDiscription text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                    </Card>
                </Col>                
            </Row>
        </div>
    </div>
  )
}
