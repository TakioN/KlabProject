import { useState } from 'react';

import SidePanel from "./SidePanel";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import back1 from '../img/back1.png';
import back2 from '../img/back2.png';
import back3 from '../img/back3.png';
import back4 from '../img/back4.png';
import back5 from '../img/back5.png';
import back6 from '../img/back6.png';

function WritingDiary() {

    const [activeBackId, setActiveBackId] = useState("");

    const backgroundHandler = (e) => {
        setActiveBackId(e.target.id);
    }

    return (
        <div>
            <SidePanel />
            <div className='mainscreen' style={{ marginRight: '200px' }}>
                <div>
                    <p style={{
                        color: '#0093ED',
                        fontSize: '50px',
                        fontFamily: 'poetsenone',
                        marginBottom: '70px'
                    }}>
                        How Was Your Day?
                    </p>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            placeholder="key1"
                        />
                        <label htmlFor="floatingInputCustom" style={{ color: '#0093ED' }}>Keyword</label>
                    </Form.Floating>
                    <div id='background_select'>
                        <Container>
                            <Row>
                                <Col
                                    className='background_paper'
                                    style={{ border: activeBackId === 'back1' ? 'black 1px solid' : 'rgb(205, 201, 201) 1px solid' }}
                                >
                                    <img
                                        src={back1} alt=""
                                        id='back1'
                                        onClick={backgroundHandler}
                                    />
                                </Col>
                                <Col
                                    className='background_paper'
                                    style={{ border: activeBackId === 'back2' ? 'black 1px solid' : 'rgb(205, 201, 201) 1px solid' }}
                                >
                                    <img src={back2} alt="" id='back2' onClick={backgroundHandler} />
                                </Col>
                                <Col
                                    className='background_paper'
                                    style={{ border: activeBackId === 'back3' ? 'black 1px solid' : 'rgb(205, 201, 201) 1px solid' }}
                                >
                                    <img src={back3} alt="" id='back3' onClick={backgroundHandler} />
                                </Col>
                                <Col
                                    className='background_paper'
                                    style={{ border: activeBackId === 'back4' ? 'black 1px solid' : 'rgb(205, 201, 201) 1px solid' }}
                                >
                                    <img src={back4} alt="" id='back4' onClick={backgroundHandler} />
                                </Col>
                                <Col
                                    className='background_paper'
                                    style={{ border: activeBackId === 'back5' ? 'black 1px solid' : 'rgb(205, 201, 201) 1px solid' }}
                                >
                                    <img src={back5} alt="" id='back5' onClick={backgroundHandler} />
                                </Col>
                                <Col
                                    className='background_paper'
                                    style={{ border: activeBackId === 'back6' ? 'black 1px solid' : 'rgb(205, 201, 201) 1px solid' }}
                                >
                                    <img src={back6} alt="" id='back6' onClick={backgroundHandler} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div id='button_case'>
                        <span id="button_outer">
                            <span id="button_inner"></span>
                            WRITE
                        </span>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}

export default WritingDiary;