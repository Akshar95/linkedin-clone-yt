import './Sidebar.css';
import { Avatar } from '@material-ui/core'

function Sidebar() {

    const recentItems = (topic) => (
        <div className="sidebar_recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
            <img src=
            'https://images.unsplash.com/photo-1583263201272-f4e5bedc2f36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80' alt="scene" />
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
                {recentItems('react.js')}
                {recentItems('softwareengineering')}
                {recentItems('design')}
                {recentItems('frontend')}
                {recentItems('webdev')}
            </div>
        </div>
    )
}

export default Sidebar
