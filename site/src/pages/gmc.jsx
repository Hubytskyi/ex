import React from 'react';
import GMCForm from '../components/forms/gmc';
import {Layout} from "@layout/Layout/Layout";
import GMCLayout from "../layouts/gmc";

const GMC = (props) => {
    return (
        <Layout {...props}>
            <GMCLayout>
                <GMCForm/>
            </GMCLayout>
        </Layout>
    );
};

export default GMC;