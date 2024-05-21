import Post from "./Post";

function MainBoard(){
    return (
        <div
            style={{
                height: '100%',
                padding: '0 100px',
            }}
        >
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default MainBoard;