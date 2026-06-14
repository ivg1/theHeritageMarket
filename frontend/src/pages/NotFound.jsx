import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-center">
                <div className="text-8xl font-bold my-20 flex flex-col md:items-start dark:text-(--darktext)">
                    <div>404</div>
                    <div>Not</div>
                    <div>Found</div>
                    <span className="m-0 text-[20px]">(go&nbsp;<Link to="/" className="text-red-600 hover:underline">home</Link>)</span>
                </div>
            </div>
        </div>
    )
}