export default function PostCards() {
    return (
        <a href="#" className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
                src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 rounded-t-lg"
            />

            <div className="relative border-t border-gray-200 bg-white p-5">
                <h3 className="mt-2 text-xl font-bold text-gray-800">Robot Toy</h3>
                <p className="mt-1 text-sm text-gray-600">$14.99</p>
            </div>
        </a>
    );
}
