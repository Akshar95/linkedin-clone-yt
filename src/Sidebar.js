import './Sidebar.css';
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className='sidebar__avatar'/>
                <h2>Akshar Patel</h2>
                <h4>This is my LinkedIn Page</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar_statNumber">8,294</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views On Post</p>
                    <p className="sidebar_statNumber">2,334</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
