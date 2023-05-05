import "../assets/styles/index.css"
import { Input, StatusCard } from "../components"

const Home = (): JSX.Element => {
    return (
        <div className="w-full h-screen bg-slate-900 pt-8">
            <div className="w-2/4 mx-auto">
                <h1 className="text-2xl font-bold text-gray-400 text-center">Welcome To TaskHub :)</h1>

                <form className="my-5 w-full">
                    <Input type="text" placeholder="Enter Task Name Here, Ex: watch netflix" submit={true} />
                </form>

                <div className="flex justify-between">
                    <div className="w-1/3">
                        <StatusCard text="To Do 🫢" />
                    </div>
                    <div className="mx-4 w-1/3">
                        <StatusCard text="Doing 🙂" />
                    </div>
                    <div className="w-1/3">
                        <StatusCard text="Done 😃" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
