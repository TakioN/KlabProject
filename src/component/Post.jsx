import diary from '../img/diary.png';
import { PiBookmarkSimple } from "react-icons/pi";
// import { FcBookmark } from "react-icons/fc";
import { CgComment } from "react-icons/cg";

function Post() {
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
                <PiBookmarkSimple size='30' style={{marginRight: '10px', verticalAlign: 'middle'}}/>
                <span style={{marginRight: '50px', height: '30px', display: 'inline-block'}}>0</span>
                <CgComment size='28' style={{verticalAlign: 'middle'}} />

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
        </div>        
    )
}

export default Post;