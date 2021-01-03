/**
 * 시간표
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import Breadcrumb from './Breadcrumb';

function Timetable() {

    return (
        <Layout header footer>
            {/* breadcrumb */}
            <Breadcrumb link="/timetable" name="시간표" />
        </Layout>
    );
}

export default withRouter(Timetable);