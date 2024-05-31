import { useState, useRef, useEffect } from 'react';

import API from './API';
import SidePanel from "./SidePanel";
import imageMapping from './imageMapping';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaDeleteLeft } from "react-icons/fa6";

import back3 from '../img/back3.png';

function WritingDiary() {

    const [activeBackId, setActiveBackId] = useState("");
    const [selectedKey, setSelectedKey] = useState([]);
    const [tempDiary, setTempDiary] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Nunc ac nunc nec ligula commodo consequat quis id augue. Morbi nec sapien lectus." +
        "Vestibulum sollicitudin ultricies molestie. Nunc vitae lectus eget erat consequat euismod." +
        "In sit amet nibh fringilla diam vestibulum imperdiet. Etiam tristique nisl lacinia, tincidunt risus id," +
        "pulvinar purus. Vestibulum feugiat vitae tortor eu vehicula. Proin nec nunc accumsan, pulvinar odio id," +
        "sollicitudin lorem. Aliquam luctus ut est sed ornare. Fusce cursus nulla id sem egestas accumsan." +
        "Nunc et ante accumsan, consequat ex non, semper mi. Vestibulum mattis porta faucibus. Cras finibus" +
        "eros a tellus sodales consectetur. Mauris felis nibh, egestas et lorem in, tincidunt lobortis arcu." +
        "In mauris nibh, imperdiet quis ex ut, molestie auctor sapien. Duis efficitur, nibh nec iaculis egestas," +
        "lorem neque blandit nulla, maximus dignissim justo erat eget elit. Duis ullamcorper faucibus mollis." +
        "Donec auctor quis dolor nec euismod. Morbi rhoncus eleifend lacus, sed semper nulla hendrerit ut." +
        "Suspendisse pharetra faucibus sapien. Curabitur auctor dui sed gravida mollis. Etiam orci sapien," +
        "finibus ac lorem convallis, finibus pharetra est. Nunc quis odio pellentesque, suscipit augue at," +
        "pulvinar libero. Nam porta, orci a auctor egestas, nulla enim varius quam, eget ultrices est leo a dui." +
        "Etiam egestas finibus mattis. Aenean nunc est, fringilla sed risus at, pulvinar lobortis nisl." +
        "Maecenas commodo fringilla placerat. Maecenas quis laoreet eros. Praesent metus tellus, ultrices et dolor" +
        "quis, tristique mattis justo. Maecenas blandit, dolor eget dignissim fermentum, purus risus pulvinar nisl," +
        "et dignissim ligula lacus vel neque. Ut interdum purus sed pharetra viverra. Suspendisse venenatis eget" +
        "odio sit amet convallis. Integer facilisis imperdiet purus, non dapibus metus tincidunt ut. Sed a lobortis" +
        "sem. Fusce et sem ipsum. Donec in nibh at mi convallis luctus a et ex. Donec aliquet accumsan nulla." +
        "Vivamus eget odio eu nulla efficitur pretium sit amet vitae lectus. Ut dapibus lectus libero," +
        "et cursus metus cursus interdum.");
    const [diary, setDiary] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Nunc ac nunc nec ligula commodo consequat quis id augue. Morbi nec sapien lectus." +
        "Vestibulum sollicitudin ultricies molestie. Nunc vitae lectus eget erat consequat euismod." +
        "In sit amet nibh fringilla diam vestibulum imperdiet. Etiam tristique nisl lacinia, tincidunt risus id," +
        "pulvinar purus. Vestibulum feugiat vitae tortor eu vehicula. Proin nec nunc accumsan, pulvinar odio id," +
        "sollicitudin lorem. Aliquam luctus ut est sed ornare. Fusce cursus nulla id sem egestas accumsan." +
        "Nunc et ante accumsan, consequat ex non, semper mi. Vestibulum mattis porta faucibus. Cras finibus" +
        "eros a tellus sodales consectetur. Mauris felis nibh, egestas et lorem in, tincidunt lobortis arcu." +
        "In mauris nibh, imperdiet quis ex ut, molestie auctor sapien. Duis efficitur, nibh nec iaculis egestas," +
        "lorem neque blandit nulla, maximus dignissim justo erat eget elit. Duis ullamcorper faucibus mollis." +
        "Donec auctor quis dolor nec euismod. Morbi rhoncus eleifend lacus, sed semper nulla hendrerit ut." +
        "Suspendisse pharetra faucibus sapien. Curabitur auctor dui sed gravida mollis. Etiam orci sapien," +
        "finibus ac lorem convallis, finibus pharetra est. Nunc quis odio pellentesque, suscipit augue at," +
        "pulvinar libero. Nam porta, orci a auctor egestas, nulla enim varius quam, eget ultrices est leo a dui." +
        "Etiam egestas finibus mattis. Aenean nunc est, fringilla sed risus at, pulvinar lobortis nisl." +
        "Maecenas commodo fringilla placerat. Maecenas quis laoreet eros. Praesent metus tellus, ultrices et dolor" +
        "quis, tristique mattis justo. Maecenas blandit, dolor eget dignissim fermentum, purus risus pulvinar nisl," +
        "et dignissim ligula lacus vel neque. Ut interdum purus sed pharetra viverra. Suspendisse venenatis eget" +
        "odio sit amet convallis. Integer facilisis imperdiet purus, non dapibus metus tincidunt ut. Sed a lobortis" +
        "sem. Fusce et sem ipsum. Donec in nibh at mi convallis luctus a et ex. Donec aliquet accumsan nulla." +
        "Vivamus eget odio eu nulla efficitur pretium sit amet vitae lectus. Ut dapibus lectus libero," +
        "et cursus metus cursus interdum.");
    //diaryState : 0 -> before writing, 1 -> modifying, 2 -> modifiable
    const [diaryState, setDiaryState] = useState(0);
    const inputTag = useRef();
    const modifiedDiary = useRef();

    const BACKGROUND_IMAGE_COL_NUM = 6;

    const backgroundHandler = (e) => {
        setActiveBackId(e.target.id);
        console.log(activeBackId);
    }
    const keyInput = (e) => {
        if (e.key === 'Enter') {
            let input = inputTag.current.value.trim();
            if (input !== '') {
                setSelectedKey([...selectedKey, input]);
                inputTag.current.value = "";
            }
        }
    }
    const showSelectedKey = (arr) => {
        return arr.map((key, idx) => (
            <span
                key={idx}
                style={{
                    display: 'inline-block',
                    padding: '5px',
                    border: '#0093ED 2px solid',
                    borderRadius: '7px',
                }}
            >
                {key}
                <FaDeleteLeft style={{ marginLeft: '5px' }} onClick={() => { deleteKey(idx) }} />
            </span>
        ))
    }

    const deleteKey = (idx) => {
        setSelectedKey(selectedKey.filter((_, i) =>
            i !== idx
        ));
    }

    const diaryModifyHandler = (e) => {
        setTempDiary(e.target.value);
    }

    const renderBackground = () => {
        const len = Object.keys(imageMapping).length;
        let rowNum = Math.floor(len / BACKGROUND_IMAGE_COL_NUM);
        let cols = [];
        let rows = [];
        let sliceCols = [];

        for (let key in imageMapping) {

            cols.push((
                <Col
                    className='background_paper'
                    style={{ border: activeBackId === key ? 'black 1px solid' : 'rgb(205, 201, 201) 1px solid' }}
                >
                    <img src={process.env.PUBLIC_URL + imageMapping[key]} alt="" id={key} onClick={backgroundHandler} />
                </Col>
            ))
        }

        for (let i = 0; i < rowNum; i++) {
            sliceCols = cols.slice(BACKGROUND_IMAGE_COL_NUM * i, BACKGROUND_IMAGE_COL_NUM * (i + 1));
            rows.push((<Row>
                {sliceCols}
            </Row>));
        }
        return (
            <>{rows}</>
        )
    }

    const writeDiary = async (a) => {
        let date = new Date().toLocaleDateString();
        let keywordString = "";
        for(let i = 0; i < selectedKey.length; i++) {
            if(i == 0) {
                keywordString += selectedKey[i];
            }
            else {
                keywordString += ',' + selectedKey[i];
            }
            
        }
        try {
            // const req = await API.post("/gpt/diary/dutch", {
            const req = await API.post("/dutch", {
                'userName': 'Lee Jungbeen',
                'userInput': keywordString,
                'todayDate': date
            });
        } catch (error) {
            console.error("There was an error in Post!", error);
        }

        try {
            //error: gpt get method 없음
            const res = await API.get('/gpt');
            console.log(res.data);
            setDiary(res.data.message.content);
            setTempDiary(res.data.message.content);
        } catch (error) {
            console.error("There was an error in Get!", error);
        }
    }

    const sendDiary = async () => {
        //error: put method 없음
        if (diary.length != 0) {
            try {
                await API.post('/diaries', {
                    'userId': 3812456,
                    'content': diary
                })
            } catch (error) {
                console.error("There was an error in DiaryPost!", error)
            }

        }
    }

    return (
        <div>
            <SidePanel />
            <div className='mainscreen' style={{ marginRight: '200px' }}>

                {diaryState === 0 &&
                    <div>
                        <p style={{
                            color: '#0093ED',
                            fontSize: '50px',
                            fontFamily: 'poetsenone',
                            marginBottom: '70px'
                        }}>
                            How Was Your Day?
                        </p>
                        <p style={{
                            fontFamily: 'poetsenone',
                            marginBottom: '10px'
                        }}>
                            Press Enter Key After Each Keyword
                        </p>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                placeholder="key1sds"
                                onKeyDown={keyInput}
                                ref={inputTag}
                            />
                            <label htmlFor="floatingInputCustom" style={{ color: '#0093ED' }}>Keyword</label>
                        </Form.Floating>

                        <div id='selectedKey'>{showSelectedKey(selectedKey)}</div>

                        <div id='background_select'>
                            <Container>
                                {renderBackground()}
                            </Container>
                        </div>
                        <div className='button_case'>
                            <span className="button_outer" onClick={() => {
                                if (selectedKey.length > 0) {
                                    writeDiary(selectedKey);
                                    setDiaryState(2);
                                }
                            }}>
                                <span className="button_inner"></span>
                                WRITE
                            </span>
                        </div>
                    </div>
                }
                {diaryState === 1 &&
                    <div>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '600px' }}
                            value={tempDiary}
                            ref={modifiedDiary}
                            onChange={diaryModifyHandler}
                        />
                        <div className='button_case' style={{ width: '100%', marginTop: '20px', height: '60px' }}>
                            <span className="button_outer" onClick={() => {
                                if (tempDiary.length > 0) {
                                    setDiary(tempDiary);
                                    setDiaryState(2);
                                    window.scrollTo({ top: 0 });
                                    // setDiary(modifiedDiary.current.value)
                                }
                            }}>
                                <span className="button_inner"></span>
                                APPLY
                            </span>
                        </div>
                    </div>
                }
                {diaryState === 2 &&
                    <div>
                        <div id='modifiable' style={{
                            backgroundImage: `url(${back3})`
                        }}>
                            {diary}
                        </div>
                        <div className='button_case' style={{ width: '630px', height: '60px' }}>
                            <span className="button_outer" onClick={() => { setDiaryState(1); window.scrollTo({ top: 0 }) }}>
                                <span className="button_inner"></span>
                                MODIFY
                            </span>
                        </div>
                        <div className='button_case' style={{ width: '630px', marginTop: '20px', height: '60px' }}>
                            <span className="button_outer" onClick={() => {
                                sendDiary();
                                setDiaryState(0);
                                window.scrollTo({ top: 0 });
                                setSelectedKey([]);
                            }}>
                                <span className="button_inner"></span>
                                SAVE
                            </span>
                        </div>
                    </div>
                }
                <div>

                </div>
            </div>

        </div>
    );
}

export default WritingDiary;