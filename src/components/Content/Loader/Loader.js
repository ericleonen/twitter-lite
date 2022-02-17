import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import './Loader.css';

export const Loader = () => {
    return (
        <div className="Loader">
            <FontAwesomeIcon icon={faCircleNotch} id="loader-icon"/>
            <p>Loading tweets...</p>
        </div>
    );
}