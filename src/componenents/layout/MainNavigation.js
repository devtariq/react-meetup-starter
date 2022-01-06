import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
function MainNavigation () {
    return(
        <header className= {classes.header}>
            <div className={classes.logo}>React Meetup</div>
            <nav>
                <ul>
                    <li><Link to='/'>All MeetUP</Link></li>
                    <li><Link to='/new-meetup'>New MeetUp</Link></li>
                    <li><Link to='/favourite'>My Favourite</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;