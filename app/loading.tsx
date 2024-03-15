import Footer from "../components/footer"
import stytle from "../styles/loading.module.css"

export default function Loading() {

    return (
        <div className="min-h-screen">
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center items-center mb-1">
                <div className="animate-spin">👻</div>
                <span className="font-bold">&#160;Loading...</span>
            </div>
            </div>
        </div>
        </div>


    )
}