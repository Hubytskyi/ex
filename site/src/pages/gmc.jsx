import React from 'react';
import GMCLayout from '../layouts/gmc';
import GMCForm from '../components/forms/gmc';

const GMC = () => {
    return (
        <GMCLayout headerType={'form'}>
            <GMCForm />
        </GMCLayout>
    );
};

export default GMC;