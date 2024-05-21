import RecentUploader from "./RecentUploader";
import MainBoard from './MainBoard';

function MainPanel() {
    return(
        <div
            className='mainscreen'
        >
            <RecentUploader />
            <MainBoard />
        </div>
    )
}

export default MainPanel;