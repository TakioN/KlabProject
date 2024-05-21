import SidePanel from "./SidePanel";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import diary2 from '../img/diary2.png';
import diary from '../img/diary.png';
import diary3 from '../img/diary3.png';
import diary4 from '../img/diary4.png';

function Profile() {
    return (
        <div>
            <SidePanel />
            <div className='mainscreen'>
                <div id="userInfo" style={{
                        marginRight: '200px',
                        paddingRight: '50px',
                    }}
                    className = 'clearfix'
                >
                    <img
                        src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                        alt=""
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            float: 'left',
                            marginRight: '80px'
                        }}
                    />
                    <div style={{
                            display: 'inline-block',
                            width: 'calc(100% - 230px)'
                        }}
                    >
                        <p className = 'userInfo_line' style={{fontSize: '20px'}}>
                            <span style={{marginRight: '25px'}}>userName</span>
                            <Button variant="secondary">Edit Profile</Button>
                        </p>
                        <p className = 'userInfo_line'>
                            <span className='userInfo_follow'>Post <b>13</b></span>
                            <span className='userInfo_follow'>Follower <b>586</b></span>
                            <span className='userInfo_follow'>Following <b>3</b></span>  
                        </p>
                        <p className = 'userInfo_line'>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Phasellus aliquam eu ante eu eleifend duis
                        </p>                        
                    </div>
                </div>
                <div 
                    id="userPost"
                    style={{
                        // background: 'yellow',
                        marginRight: '200px',
                        marginTop: '50px',
                        paddingTop: '50px',
                        borderTop: 'solid gray 1px',
                    }}
                >
                    <Container>
                        <Row>
                            <Col className='profile_grid'>
                                <img 
                                    src={diary2} 
                                    alt=''
                                />
                            </Col>
                            <Col className='profile_grid'>
                                <img 
                                    src={diary} 
                                    alt=''
                                />
                            </Col>
                            <Col className='profile_grid'>
                                <img 
                                    src={diary3} 
                                    alt=''
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='profile_grid'>
                                <img 
                                    src={diary4} 
                                    alt=''
                                />
                            </Col>
                            <Col className='profile_grid'></Col>
                            <Col className='profile_grid'></Col>
                        </Row>

                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Profile;