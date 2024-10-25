import PostCards from "./post";

export default function Catalogo() {
    return (
        <div className="text-center px-4 lg:px-16 py-8">
            <h1 className="text-white mb-8 text-3xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 z-10">
                    Catálogo
                </span>
            </h1>
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <PostCards />
            </main>
        </div>
    );
}
