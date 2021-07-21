import './HeaderOption.css'
import { Avatar } from '@material-ui/core'

function HeaderOption({avatar, Icon, title}) {
    return (
        <div className='HeaderOption'>
            {Icon && <Icon className='HeaderOption__icon' />}
            {avatar && <Avatar src={avatar} />}
            <h3 className='HeaderOption__title'>{title}</h3>
            
        </div>
    )
}

export default HeaderOption
