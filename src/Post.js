import { Avatar } from '@material-ui/core'
import './Post.css'

function Post({ name, description, message, photoURL }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar /> 
                <div className="post__info">
                    <h2>Akshar Patel</h2>
                    <p>Description</p>
                </div>
             </div> 
            
            <div className="post__body">
                <p>message goes here</p>
            </div>
        </div>

       
    )
}

export default Post
