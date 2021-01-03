/**
 * 공지사항
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import Breadcrumb from './Breadcrumb';

function Notice() {

    return (
        <Layout header footer>
            {/* breadcrumb */}
            <Breadcrumb link="/notice" name="공지사항" />
        </Layout>
    );
}

export default withRouter(Notice);