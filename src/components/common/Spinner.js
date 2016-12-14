import React, {PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Spinner = ({isLoading}) => {
    if (isLoading) {
        return (
            <div>
                <CircularProgress size={80} thickness={5} />
            </div>
        );
    } else {
        return null;
    }

};

Spinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default Spinner;
