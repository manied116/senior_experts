import React from 'react';
import { Col, Row,Button} from 'antd';

const Projects = () => {
    return (
        <Row style={{padding:"40px 60px"}}>
            <Col className='project_wrapper' xs={2} sm={4} md={24} lg={24} xl={24}>
                <Row>
                    <Col className='project_content' xs={2} sm={4} md={12} lg={12} xl={12}>
                        <h3>Empowering SMEs to achive their full potential</h3>
                        <p>Connect with experience talent to fuel your growth, innovation, and success.</p>
                        <Button size='large' type="primary">Post a  Project</Button>
                    </Col>
                    <Col xs={2} sm={4} md={12} lg={12} xl={12}>image</Col>
                </Row>
            </Col>
            <Col className='project_opening' xs={2} sm={4} md={24} lg={24} xl={24}>
                <h3>Discover a world of Opportunities Tailored to your Expertise</h3>
                <p>Discover a wide range of projects tailored to your skill and experience. Browse through current openings and find perfect fit for your expertise.</p>
                
            </Col>
        </Row>
    )
}

export default Projects
 