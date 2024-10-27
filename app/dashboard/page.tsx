"use client";

import { withAuth } from '../userContext/userContext';
import Dashboard from '../components/dashboard/dashboard';

function Page() {
    return (
        <div>
            <div className='mt-20'>
                <Dashboard />
            </div>
        </div>
    )
}

export default withAuth(Page);