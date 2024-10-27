"use client";
import AddPost from "../components/catalogo/addpost";
import Footer from "../components/footer/Footer";
import { withAuth } from '../userContext/userContext'; 

function Page() {
    return (
        <div>
            <div className="py-20 mt-20"> 
                <AddPost />
            </div>
            <Footer/>
        </div>
    )
}

export default withAuth(Page);