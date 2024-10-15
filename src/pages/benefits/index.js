import React from 'react'
import { Col, Row,Button} from 'antd';
import {BulbOutlined,CalendarOutlined,LineChartOutlined} from '@ant-design/icons';

const Benefits = () => {
	return (
		<Row className='benefit_wrapper'>
			<Col xs={2} sm={4} md={24} lg={24} xl={24} className='title'>
				<h3>Empower your Next Chapter: Discover the Benefits of joining Our Senior Expert Community</h3>
			</Col>
			<Col xs={2} sm={4} md={24} lg={24} xl={24}>
				<Row style={{padding:"10px 250px"}}>
				<Col xs={2} sm={4} md={8} lg={8} xl={8} className='card'>
					<Button type="primary" shape="circle" icon={<BulbOutlined />}/>
					<h4>Share Your Expertise</h4>
					<p>Continue making a meaningful impact by sharing your knowledge and experience with businesses seeking your guidance.</p>
				</Col>
				<Col xs={2} sm={4} md={8} lg={8} xl={8} className='card'>
					<Button type="primary" shape="circle" icon={<CalendarOutlined />}/>
					<h4>Flexible Opportunities</h4>
					<p>Choosing projects that align with your interests and availability, enjoying the freedom and flexibility of independant work.</p>
				</Col>
				<Col xs={2} sm={4} md={8} lg={8} xl={8} className='card'>
					<Button type="primary" shape="circle" icon={<LineChartOutlined />}/>
					<h4>Continued Growth</h4>
					<p>Stay engaged and challenged by tackling new projects and expanding your professional network.</p>
				</Col>
				</Row>
			</Col>
		</Row>
	)
}

export default Benefits
