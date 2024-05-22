import { useState } from 'react';

import diary from '../img/diary.png';
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

    return(
        <div
            style={{
                marginBottom: '50px'
            }}
        >
            <div
                style = {{
                    display: 'flow',
                    alignItems: 'flex-start',
                    paddingLeft: '2px',
                    marginBottom: '10px',
                    paddingTop: '3px'
                }}
            >
                <img 
                    src = 'https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                    alt=""
                    style = {{
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        marginRight: '10px'
                    }}
                    className = 'post_profile'
                />
                <span
                    style = {{
                        display: 'inline-block',
                        lineHeight: '30px',
                        height: '30px'
                    }}
                >
                    <b>itsme</b>
                </span>
            </div>
            <div className='post_content'>
                <img 
                    src = {diary} 
                    alt='diary'
                    style={{
                        width: '70%',
                        verticalAlign: 'bottom'
                    }}
                />
            </div>
            <div 
                className = 'post_comment'
                style={{
                    paddingTop: '15px',
                    marginBottom: '10px'
                }}
            >   
                {isLike ?
                    <FcBookmark size='30' style={{marginRight: '10px', verticalAlign: 'middle'}} onClick={() => {setIsLike(!isLike)}}/>
                    :
                    <PiBookmarkSimple size='30' style={{marginRight: '10px', verticalAlign: 'middle'}} onClick={() => {setIsLike(!isLike)}}/>
                }
                <span style={{marginRight: '50px', height: '30px', display: 'inline-block'}}>0</span>
                <CgComment size='28' style={{verticalAlign: 'middle'}} onClick={() => showPostModal()} />

            </div>
            <div 
                className = 'post_text'
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