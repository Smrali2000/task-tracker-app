import {Link} from 'react-router-dom';
import Button from './Button';

function About() {
  return (
    <div className='about-container'>
        <ul>
          <li>This a simple React app named task-tracker to track your upcoming tasks and keep reminder of those.</li>
          <li>Made using simple HTML, CSS, React js and JSON server for simple inbuilt backend.</li>
        </ul>
        <Link to='/'> 
          <center>
            <Button color="blue" text="Back"/>
          </center>
        </Link>
    </div>
  )
}

export default About