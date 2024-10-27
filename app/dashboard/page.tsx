"use client";

import { withAuth } from '../userContext/userContext';
import Dashboard from '../components/dashboard/dashboard';

function Page() {
    return (
        <div>
            <Dashboard />
        </div>
    )
}

export default withAuth(Page);