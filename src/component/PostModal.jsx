import { useEffect } from 'react';

import { IoCloseOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import back3 from '../img/back3.png';

function PostModal(props) {

    useEffect(() => {
        document.body.style = 'overflow: hidden';
    }, [])

    return (
        <div>
            <div id='modal-wrap'>
                <div id='modal'>
                    <div className='modal_grid' style={{ backgroundImage: `url(${back3})`, padding: '15px', overflowX: 'auto' }}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
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
                            "et cursus metus cursus interdum."}
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

                        <div id='comment_text' style={{ marginBottom: 0 }}>
                            <InputGroup className="mb-3" id="comment_input" style={{ flexWrap: 'nowrap' }}>
                                <Form.Control
                                    placeholder="Comment Someting"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    style={{ width: '75%' }}
                                />
                                <Button variant="outline-secondary" id="button-addon2" style={{ width: '25%' }}>
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