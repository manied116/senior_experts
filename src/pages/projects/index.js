import React from 'react';
import { Col, Row,Button} from 'antd';
import {AppstoreOutlined,CheckCircleOutlined} from '@ant-design/icons';

import Logo1 from '../../assets/img/logoipsum-1.svg'
import Logo2 from '../../assets/img/logoipsum-2.svg'
import Logo3 from '../../assets/img/logoipsum-3.svg'
import Logo4 from '../../assets/img/logoipsum-4.svg'
const Projects = () => {
    const Projects = [
        "Business Strategy",
        "Marketing & Sales",
        "Finance & Accounting",
        "Technology & IT",
        "Operation & Management",
        "Human Resource",
        "Legal & compliance",
        "Healthcare",
        "Education"
    ]
    const JobPosts = [
        {
            id:1,
            title:"Finance Advisor",
            location:"Bangalore",
            logo:Logo1,
            companyName:"Tech innovation Ltd",
            content:"Provide Financial guidance and stratagic plannig to a growing startup",
            type:["Part-time, Remote","Financial Analysis","Strategic Planning","Startup Experience"],
            verify:true
        },
        {
            id:2,
            title:"Marketing Consultant",
            location:"Delhi",
            logo:Logo3,
            companyName:"Green Earth Products",
            content:"Develop and implement a Marketing strategy to increase brand awareness and..",
            type:["3-Month Contract","Marketing Strategy","Digital Marketing","Brand Management"],
            verify:true
        },
        {
            id:3,
            title:"Operation Manager",
            location:"Mumbai",
            logo:Logo2,
            companyName:"Global Logistics Solution",
            content:"Oversee daily operation, optimize process and improve overall efficiency",
            type:["Full time, On-site","Operation Management","Process Improvement","Leadership"],
            verify:false
        },
        {
            id:4,
            title:"Hr Consultant",
            location:"Chennai",
            logo:Logo3,
            companyName:"PeopleFist Consultant",
            content:"Design and implement HR polices, procedures and employee engagement",
            type:["WFH","HR Management","Employee Relation","Talent Aquistion"],
            verify:true
        },
        {
            id:5,
            title:"Legal Advisor",
            location:"Hydrabad",
            logo:Logo4,
            companyName:"Lex & co Law Firm",
            content:"Provide legal counsel on contracts, compliance and risk management",
            type:["1-Month Contract Remote","Legal Expertise","Contract Review","Compliance"],
            verify:false
        },
        {
            id:6,
            title:"Business Development Manager",
            location:"Pune",
            logo:Logo1,
            companyName:"Growthminds Ventures",
            content:"Identify and develop new opportunities, build relationship and close.",
            type:["Full time Employee","Business Development","Sales","Negotiation"],
            verify:true
        }
    ]
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
                <p className='content'>Discover a wide range of projects tailored to your skill and experience. Browse through current openings and find perfect fit for your expertise.</p>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:"20px",padding:"20px 70px"}}>
                    {Projects.map((project,index)=>(
                        <div key={index} className='project_list'>
                            <AppstoreOutlined />
                            <p>{project}</p>
                        </div>
                    ))}
                </div>
                <div className='jobPost'>
                    {JobPosts.map((jobpost,i) =>(
                        <div className='card'>
                            <div className='head'>
                                <div style={{textAlign:"justify"}}>
                                    <h3>{jobpost.companyName}</h3>
                                    <p>{jobpost.location}</p>
                                </div>
                                <div>
                                    <img src={jobpost.logo} alt={jobpost.id} style={{height:"25px"}}/>
                                </div>
                            </div>
                            <div className='card_content'>
                                <h3>{jobpost.title}</h3>
                                <p>{jobpost.content}</p>
                                <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"8px"}}>
                                {jobpost.type.map((type,index)=>(
                                    <div key={index} style={{padding:"4px",width:"fit-content",background:"#FFF",border:"1px solid #d6d6d6",borderRadius:"6px"}}>
                                        <p style={{fontSize:"12px"}}>{type}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <div className='footer'>
                                 <Button type="primary">Apply Now</Button>
                                 { jobpost.verify ? <span><CheckCircleOutlined /> Verify</span> : ""}
                                 
                            </div>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    )
}

export default Projects
 