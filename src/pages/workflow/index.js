import React from 'react'
import { Col, Row,Switch, Button,Avatar,Badge,Divider} from 'antd';
import {UserOutlined,SearchOutlined,CheckCircleOutlined,SafetyOutlined} from '@ant-design/icons';

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
                            <Avatar className='avatar' icon={<UserOutlined />} />
                        </div>
                        <h4>Create Your Profile</h4>
                        <p>Highlight your skills, experience and areas of expertise to attract pontential clients.</p>
                    </Col>
                    <Col span={6} className='card'>
                        <div className='info'>
                            <Badge count={2} showZero />
                            <Divider type="horizontal" />
                            <Avatar className='avatar' icon={<SearchOutlined />} />
                        </div>
                        <h4>Explore Projects</h4>
                        <p>Discover a wide range of projects aligned with your interest and skilset.</p>
                    </Col>
                    <Col span={6} className='card'>
                        <div className='info'>
                            <Badge count={3} showZero />
                            <Divider type="horizontal" />
                            <Avatar className='avatar' icon={<UserOutlined />} />
                        </div>
                        <h4>Apply & Connect</h4>
                        <p>Submit compelling proposals and build relationship with perpective clients.</p>
                    </Col>
                    <Col span={6} className='card'>
                        <div className='info'>
                            <Badge count={4} showZero />
                            <Divider type="horizontal" />
                            <Avatar className='avatar' icon={<CheckCircleOutlined />} />
                        </div>
                        <h4>Get Started</h4>
                        <p>Embark on simulating Projects and contribute your valuable insights to drive success.</p>
                    </Col>
                </Row>
            </Col>
            <Divider style={{minWidth:"80%",width:"80%",marginLeft:'170px'}}/>
			<Col xs={2} sm={4} md={24} lg={24} xl={24} style={{padding:"20px 125px"}}>
                <Row>
                    <Col style={{display:'flex',alignItems:'baseline',gap:"14px",maxWidth:"23%"}} xs={{ span: 5, offset: 1,}} lg={{ span: 6, offset: 2,}}>
                        <SafetyOutlined />
                        <p style={{textAlign:"justify"}}>Efficient Management: Tools that streamline project communication and collaboration.</p>
                    </Col>
                    <Col style={{display:'flex',alignItems:'baseline',gap:"14px",maxWidth:"23%"}} xs={{ span: 11, offset: 1, }} lg={{ span: 6, offset: 2, }} >
                        <SafetyOutlined />
                        <p style={{textAlign:"justify"}}>Security & Trusted: We prioritize data security and user policy.</p>
                    </Col>
                    <Col style={{display:'flex',alignItems:'baseline',gap:"14px",maxWidth:"23%"}} xs={{ span: 5, offset: 1, }} lg={{ span: 6, offset: 2, }}>
                        <SafetyOutlined />
                        <p style={{textAlign:"justify"}}>Dedicated support: Our team is here to assist with any concerns.</p>
                    </Col>
                </Row>
            </Col>
		</Row>
	)
}

export default Workflow
