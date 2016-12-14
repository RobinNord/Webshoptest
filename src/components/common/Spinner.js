import React, {PropTypes} from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';

const Spinner = ({isLoading}) => {
    if (isLoading) {
        return (
            <div className="circularprogresspinner">
                <CircularProgress mode="indeterminate"/>
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