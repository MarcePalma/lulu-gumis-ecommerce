"use client";
import AddPost from "../components/catalogo/addpost";
import { withAuth } from '../userContext/userContext'; 

function Page() {
    return (
        <div>
            <div className="py-20 mt-20"> 
                <AddPost />
            </div>
        </div>
    )
}

export default withAuth(Page);