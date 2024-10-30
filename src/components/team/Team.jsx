import { Avatar, Card, Col, Rate, Row } from 'antd'
import { FaUserLarge } from "react-icons/fa6";

const Team = () => {
    return (
        <div className="bg-slate-100">
            <div className='container mx-auto py-20'>
                <div className="headingTitle text-center text-4xl font-bold text-[#50347f] mb-10">Reach out for more information</div>
                <div className="">
                    <Row className='mb-8' gutter={30} justify={'center'}>
                        <Col span={6}>
                            <Card className='border-slate-400 bg-purple-800 text-white' cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                <div className="cardDiscription text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                            </Card>
                        </Col>

                        <Col span={6}>
                            <Card className='border-slate-400 bg-purple-800 text-white' cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                <div className="cardDiscription text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                            </Card>
                        </Col>

                        <Col span={6}>
                            <Card className='border-slate-400 bg-purple-800 text-white' cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                <div className="cardDiscription text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Team