import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white text-2xl font-bold" href="/">Lintasarta</Link>
            <div className="flex space-x-4">
            <Link className="bg-blue text-white font-bold p-2 rounded-md" href="/">Home</Link>
            <Link className="bg-white p-2 rounded-md" href="/addTopic">Add Topic</Link>
            </div>
        </nav>
    )
}