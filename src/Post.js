import { Avatar } from '@material-ui/core'
import './Post.css'

function Post({ name, description, message, photoURL }) {
    return (
        <div className='post'>
            <Avatar /> 
        </div>
    )
}

export default Post
