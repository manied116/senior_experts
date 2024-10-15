import React from 'react';
import { Layout, Menu,Button,Flex,Col, Row,Switch,Avatar  } from 'antd';
import Logo from '../../assets/img/logo.png';
import Logo1 from '../../assets/img/logoipsum-1.svg'
import Logo2 from '../../assets/img/logoipsum-2.svg'
import Logo3 from '../../assets/img/logoipsum-3.svg'
import Logo4 from '../../assets/img/logoipsum-4.svg'

const { Header, Content } = Layout;

const Home = () => {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

    return (
        <Layout className='wrapper'>
            <Header className='header'>
                <div className='logo'>
                    <a href='/'>
                        <img src={Logo} alt='logo'  style={{height:"42px",width:'auto',position:'relative'}}/>
                    </a>
                </div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[
                        {key:"explore_projects",label:"Explore Projects"},
                        {key:"about_us",label:"About Us"},
                        {key:"resources",label:"Resources"},
                        {key:"contact",label:"Contact"}
                    ]}
                    style={{
                        flex:1,
                        color:'#FFF'
                    }}
                />
                <Flex gap="small" wrap className='action_btn'>
                    <Button className='sign_in' type="text">Sign in</Button>
                    <Button type="primary">Register</Button>
                </Flex>
            </Header>
            <Content>
                <Row align='center' justify="center" style={{gap:"35px",textAlign:"center"}}>
                    <Col xs={2} sm={4} md={24} lg={24} xl={24} className='switch_title' style={{display:"flex",justifyContent:"center",gap:"8px"}}>
                        <span>For Seniors</span>
                        <Switch defaultChecked onChange={onChange} />
                        <span>For SMES</span>
                    </Col>
                    <Col xs={2} sm={4} md={24} lg={24} xl={24} className='main_title'>
                        <h2>Unlock New Opportunities in Retirement</h2>
                    </Col>
                    <Col xs={2} sm={4} md={24} lg={24} xl={24} className='main_content'>
                        <p>Explore flexible work arrangements that fit your lifestyle. Keep learning and growing professionally</p>
                    </Col>
                    <Col xs={2} sm={4} md={24} lg={24} xl={24} className='main_action'>
                        <Flex gap="small" wrap className='action_btn'>
                            <Button size='large' className='sign_in' type="default">Register</Button>
                            <Button size='large' type="primary">Get Demo</Button>
                        </Flex>
                    </Col>
                    <Col xs={2} sm={4} md={24} lg={24} xl={24} className='main_users'>
                        <div>
                            <Avatar.Group
                            size="large"
                            max={{
                                count: 5,
                                style: {
                                    color: '#f56a00',
                                    backgroundColor: '#fde3cf',
                                    cursor: 'pointer',
                                },
                                popover: {
                                    trigger: 'click',
                                },
                            }}
                            >
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"/>
                                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3"/>
                                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
                            </Avatar.Group>
                        </div>
                        <p>Trusted by 5000+ Senior Experts and 200+ SMEs</p>
                    </Col>
                    <Col xs={2} sm={4} md={24} lg={24} xl={24}>
                        <Row align='center' justify="center" style={{gap:"20px",textAlign:"center"}}>
                            <Col xs={6} sm={6} md={4} lg={4} >
                                <img src={Logo1} alt='logo'  style={{height:"42px",width:'auto',position:'relative'}}/>
                            </Col>
                            <Col xs={6} sm={6} md={4} lg={4} >
                                <img src={Logo2} alt='logo'  style={{height:"42px",width:'auto',position:'relative'}}/>
                            </Col>
                            <Col xs={6} sm={6} md={4} lg={4} >
                                <img src={Logo3} alt='logo'  style={{height:"42px",width:'auto',position:'relative'}}/>
                            </Col>
                            <Col xs={6} sm={6} md={4} lg={4} >
                                <img src={Logo4} alt='logo'  style={{height:"42px",width:'auto',position:'relative'}}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>  
            </Content>
        </Layout>
    );
};
export default Home;