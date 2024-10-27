import AddPost from "../components/catalogo/addpost";
import Footer from "../components/footer/Footer";

export default function Page() {
    return (
        <div>
            <div className="py-20 mt-20"> 
                <AddPost />
            </div>
            <Footer/>
        </div>
    )
}
