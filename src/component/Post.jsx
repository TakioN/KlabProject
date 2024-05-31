import { useState } from 'react';

import back3 from '../img/back3.png';
import { PiBookmarkSimple } from "react-icons/pi";
import { FcBookmark } from "react-icons/fc";
import { CgComment } from "react-icons/cg";
import PostModal from './PostModal';

function Post() {
    const [isLike, setIsLike] = useState(false);
    const [show, setShow] = useState(false);

    const showPostModal = () => {
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
        document.body.style = 'overflow: unset';
    }

    return (
        <div
            style={{
                marginBottom: '50px'
            }}
        >
            <div
                style={{
                    display: 'flow',
                    alignItems: 'flex-start',
                    paddingLeft: '2px',
                    marginBottom: '10px',
                    paddingTop: '3px'
                }}
            >
                <img
                    src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                    alt=""
                    style={{
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        marginRight: '10px'
                    }}
                    className='post_profile'
                />
                <span
                    style={{
                        display: 'inline-block',
                        lineHeight: '30px',
                        height: '30px'
                    }}
                >
                    <b>itsme</b>
                </span>
            </div>
            <div className='post_content'>
                <div style={{ backgroundImage: `url(${back3})`, width: '70%', padding: '20px', overflow: 'auto' }}>
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
                {/* <img 
                    src = {diary} 
                    alt='diary'
                    style={{
                        width: '70%',
                        verticalAlign: 'bottom'
                    }}
                /> */}

            </div>
            <div
                className='post_comment'
                style={{
                    paddingTop: '15px',
                    marginBottom: '10px'
                }}
            >
                {isLike ?
                    <FcBookmark size='30' style={{ marginRight: '10px', verticalAlign: 'middle' }} onClick={() => { setIsLike(!isLike) }} />
                    :
                    <PiBookmarkSimple size='30' style={{ marginRight: '10px', verticalAlign: 'middle' }} onClick={() => { setIsLike(!isLike) }} />
                }
                <span style={{ marginRight: '50px', height: '30px', display: 'inline-block' }}>0</span>
                <CgComment size='28' style={{ verticalAlign: 'middle' }} onClick={() => showPostModal()} />

            </div>
            <div
                className='post_text'
                style={{
                    width: '70%',
                    fontSize: '14px',

                }}
            >
                Long time no seeLong time no seeLong time no
                seeLong time no seeLong time no seeLong time no seeLong time no seeLong time no seeLong
                ime no seeLong time no seeLong time no seeLong time no seeLong time no see
            </div>

            {show && <PostModal onClose={() => closeModal()} />}
        </div>
    )
}

export default Post;