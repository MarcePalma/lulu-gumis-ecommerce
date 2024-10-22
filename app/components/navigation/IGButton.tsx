import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function InstagramButton() {
    return (
        <Link href={"https://www.instagram.com/lulugumis"} target="_blank" rel="noopener noreferrer" >
            <div className="fixed bottom-4 right-4 p-3 bg-pink-500 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaInstagram className="text-white h-6 w-6" />
            </div>
        </Link>
    )
}