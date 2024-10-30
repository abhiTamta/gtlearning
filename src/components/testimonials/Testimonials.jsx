import { Avatar, Card, Col, Rate, Row } from 'antd'
import { FaUserLarge } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <div className='container mx-auto py-20'>
      <div className="headingTitle text-center text-4xl font-bold text-[#50347f] mb-10">What our students say about us</div>
      <div className="">
        <Row gutter={30} justify={'center'}>
          <Col span={6}>
            <Card className='border-slate-400'>
              <div className="flex items-center gap-3 mb-3">
                <div className="profileImg">
                  <Avatar size={50} icon={<FaUserLarge />} />
                </div>
                <div className="">
                  <div className="font-bold text-xl mb-0">Lorem, ipsum dolor.</div>
                  <div className="text-sm">Lorem, ipsum dolor.</div>
                </div>
              </div>

              <div className="cardDiscription text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>

              <div className="flex justify-center">
              <Rate value={5} className='text-purple-700' />
              </div>
            </Card>
          </Col>

          <Col span={6}>
            <Card className='border-slate-400'>
              <div className="flex items-center gap-3 mb-3">
                <div className="profileImg">
                  <Avatar size={50} icon={<FaUserLarge />} />
                </div>
                <div className="">
                  <div className="font-bold text-xl mb-0">Lorem, ipsum dolor.</div>
                  <div className="text-sm">Lorem, ipsum dolor.</div>
                </div>
              </div>

              <div className="cardDiscription text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>

              <div className="flex justify-center">
              <Rate value={4} className='text-purple-700' />
              </div>
            </Card>
          </Col>


          <Col span={6}>
            <Card className='border-slate-400'>
              <div className="flex items-center gap-3 mb-3">
                <div className="profileImg">
                  <Avatar size={50} icon={<FaUserLarge />} />
                </div>
                <div className="">
                  <div className="font-bold text-xl mb-0">Lorem, ipsum dolor.</div>
                  <div className="text-sm">Lorem, ipsum dolor.</div>
                </div>
              </div>

              <div className="cardDiscription text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>

              <div className="flex justify-center">
              <Rate value={3} className='text-purple-700' />
              </div>
            </Card>
          </Col>

          <Col span={6}>
            <Card className='border-slate-400'>
              <div className="flex items-center gap-3 mb-3">
                <div className="profileImg">
                  <Avatar size={50} icon={<FaUserLarge />} />
                </div>
                <div className="">
                  <div className="font-bold text-xl mb-0">Lorem, ipsum dolor.</div>
                  <div className="text-sm">Lorem, ipsum dolor.</div>
                </div>
              </div>

              <div className="cardDiscription text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus architecto eius, dicta ut, vel quasi adipisci eligendi, ex qui totam possimus!</div>

              <div className="flex justify-center">
              <Rate value={3} className='text-purple-700' />
              </div>
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  )
}

export default Testimonials