/**
 * 공지사항
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import PageHeader from './PageHeader';

function Notice() {

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="공지사항" />
        </Layout>
    );
}

export default withRouter(Notice);