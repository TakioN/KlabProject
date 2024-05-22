import { useEffect } from 'react';

import { IoCloseOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import diary1 from '../img/diary.png';

function PostModal(props) {

    useEffect(() => {
        document.body.style = 'overflow: hidden';
    }, [])

    return (
        <div>
            <div id='modal-wrap'>
                <div id='modal'>
                    <div className='modal_grid'>
                        <img src={diary1} alt="" />

                    </div>
                    <div className='modal_grid' id='comment'>
                        <div>
                            <img
                                src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                                alt=''
                            />
                            <span style={{ marginRight: '5px' }}><b>username</b></span>
                            <span>재밌네요 재밌어요 완전히요 짱이에요</span>
                        </div>

                        <div>
                            <img
                                src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                                alt=''
                            />
                            <span style={{ marginRight: '5px' }}><b>username</b></span>
                            <span>재밌네요 재밌어요 완전히요 짱이에요</span>
                        </div>

                        <div>
                            <img
                                src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                                alt=''
                            />
                            <span style={{ marginRight: '5px' }}><b>username</b></span>
                            <span>재밌네요 재밌어요 완전히요 짱이에요</span>
                        </div>

                        <div id='comment_text' style={{marginBottom: 0}}>
                            <InputGroup className="mb-3" id="comment_input">
                                <Form.Control
                                    placeholder="Comment Someting"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Comment
                                </Button>
                            </InputGroup>
                        </div>
                    </div>

                </div>
                <IoCloseOutline
                    size='50'
                    style={{ position: 'absolute', top: '10px', right: '20px', cursor: 'pointer' }}
                    onClick={props.onClose}
                />
            </div>
        </div>
    );
}

export default PostModal;