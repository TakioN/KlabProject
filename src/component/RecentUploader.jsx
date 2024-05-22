// import { FaUser } from "react-icons/fa";

function RecentUploader() {
    return (
        <div
            style={{
                height: '15vh',
                display: 'flex',

            }}
        >
            <div
                className='story'
                style={{
                    textAlign: 'center',
                    marginRight: '20px',
                    width: '60px'
                }}
            >
                <div
                    style={{
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'border-box',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '2px 3px',
                        width: '52px'
                    }} 
                    className = 'story_profile'
                >
                    <img 
                        src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                        style={{
                            width: '50px',
                            height: '50px',
                            border: '2px solid transparent',
                            background: 'white',
                            borderRadius: '50%',
                            display: 'block',
                        }}
                        alt = ""
                    />
                    
                </div>


                <span style={{
                    fontSize: '12px',
                }}>
                    username
                </span>
            </div>

            <div
                className='story'
                style={{
                    textAlign: 'center',
                    marginRight: '20px'

                }}
            >
                <div
                    style={{
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'border-box',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '2px 3px',
                        width: '52px'
                    }} 
                    className = 'story_profile'
                >
                    <img 
                        src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                        style={{
                            width: '50px',
                            height: '50px',
                            border: '2px solid transparent',
                            background: 'white',
                            borderRadius: '50%',
                            display: 'block',
                        }}
                        alt = ""
                    />
                    
                </div>


                <span style={{
                    fontSize: '12px',
                }}>
                    username2
                </span>
            </div>

            <div
                className='story'
                style={{
                    textAlign: 'center',
                    marginRight: '20px'

                }}
            >
                <div
                    style={{
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'border-box',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '2px 3px',
                        width: '52px'
                    }} 
                    className = 'story_profile'
                >
                    <img 
                        src='https://www.shutterstock.com/image-photo/namsan-tower-pavilion-during-autumn-260nw-2345265717.jpg'
                        style={{
                            width: '50px',
                            height: '50px',
                            border: '2px solid transparent',
                            background: 'white',
                            borderRadius: '50%',
                            display: 'block',
                        }}
                        alt = ""
                    />
                    
                </div>


                <span style={{
                    fontSize: '12px',
                }}>
                    username3
                </span>
            </div>
        </div>
    )
}
export default RecentUploader;