import React from 'react'
import { Col, Row,Switch, Button,Avatar,Badge,Divider} from 'antd';
import {UserOutlined,CalendarOutlined,LineChartOutlined} from '@ant-design/icons';

const Workflow = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
	return (
		<Row className='wrokflow_wrapper'>
			<Col xs={2} sm={4} md={24} lg={24} xl={24} className='title'>
				<Row>
                    <Col xs={2} sm={4} md={12} lg={12} xl={12} className='switch_title' style={{display:"flex",justifyContent:"center",gap:"8px",flexDirection:'column'}}>
                        <div style={{display:"flex",justifyContent:"center",gap:"8px"}}>
                            <span>For Seniors</span>
                            <Switch defaultChecked onChange={onChange} />
                            <span>For SMES</span>
                        </div>
                        <h3 style={{fontSize:"26px",fontWeight:600}}> How It works ?</h3>
                    </Col>
                    <Col xs={2} sm={4} md={12} lg={12} xl={12} className='workflow_start'>
                        <p>Embark on fulfilling journey leveraging your expertise to make a lasting imapct</p>
                        <Button size='large' type="primary">Get Started</Button>
                    </Col>
                </Row>
			</Col>
			<Col xs={2} sm={4} md={24} lg={24} xl={24} className='work_flow'>
                <Row gutter={[8, 24]} className='work_flow_row'>
                    <Col span={6} className='card'>
                        <div className='info'>
                            <Badge count={1} showZero />
                            <Divider type="horizontal" />
                            <Avatar icon={<UserOutlined />} />
                        </div>
                        <h4>Create Your Profile</h4>
                        <p>Highlight your skills, experience and areas of expertise to attract pontential clients.</p>
                    </Col>
                    <Col span={6} className='card'>
                        <div className='info'>
                            <Badge count={1} showZero />
                            <Divider type="horizontal" />
                            <Avatar icon={<UserOutlined />} />
                        </div>
                        <h4>Create Your Profile</h4>
                        <p>Highlight your skills, experience and areas of expertise to attract pontential clients.</p>
                    </Col>
                    <Col span={6} className='card'>
                        <div className='info'>
                            <Badge count={1} showZero />
                            <Divider type="horizontal" />
                            <Avatar icon={<UserOutlined />} />
                        </div>
                        <h4>Create Your Profile</h4>
                        <p>Highlight your skills, experience and areas of expertise to attract pontential clients.</p>
                    </Col>
                    <Col span={6} className='card'>
                        <div className='info'>
                            <Badge count={1} showZero />
                            <Divider type="horizontal" />
                            <Avatar icon={<UserOutlined />} />
                        </div>
                        <h4>Create Your Profile</h4>
                        <p>Highlight your skills, experience and areas of expertise to attract pontential clients.</p>
                    </Col>
                </Row>
            </Col>
			<Col xs={2} sm={4} md={24} lg={24} xl={24}></Col>
		</Row>
	)
}

export default Workflow
