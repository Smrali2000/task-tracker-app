import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({onAdd, showAdd}) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' &&
            <Button 
                color= {showAdd ? 'blue' : 'green'}
                text= {showAdd ? 'Close' : 'Add'}
                onclick={onAdd} 
            />}
        </header>
    )
}

export default Header;