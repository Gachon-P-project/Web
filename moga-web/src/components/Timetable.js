/**
 * 시간표
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './common/Layout';
import PageHeader from './common/PageHeader';

function Timetable() {

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="시간표" />
        </Layout>
    );
}

export default withRouter(Timetable);