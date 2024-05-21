import {useNavigate} from 'react-router-dom';

//react-icons
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiBookReadFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

function SidePanel() {

    const navigate = useNavigate();

    const goToHome = () => { navigate('/') }
    const gotoProfile = () => { navigate('/profile') }
    const gotoWritingDiary = () => { navigate('/makediary') }

    return (
        <div
            style={{
                width: '250px',
                padding: '35px 0 0 20px',
                borderRight: '#8080804d 1px solid',
                position: 'fixed',
                height: '100%'
            }}
        >
            <span 
                style={{
                    fontFamily: 'vegan',
                    fontSize: '20px',
                    display: 'inline-block',
                    width: '100%',
                    cursor: 'pointer',
                    marginBottom: '50px',
                }}
                onClick={ () => {goToHome()} }
            >
                Memory Capsule
            </span>
            <ul style={{
                listStyle: 'none', 
                padding: 0, 
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <li className = 'sideList'><IoSearch />Search</li>
                <li className = 'sideList' onClick={() => {goToHome()}}><GoHomeFill />Home</li>
                <li className = 'sideList' onClick={() => {gotoWritingDiary()}}><RiBookReadFill/>Make Diary</li>
                <li className = 'sideList'><IoIosNotifications />Notification</li>
                <li className = 'sideList' onClick = {() => {gotoProfile()}}><CgProfile />Profile</li>
                <li className = 'sideList'><CiLogout />Log Out</li>
            </ul>
        </div>
    )
}

export default SidePanel;