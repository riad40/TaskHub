import TaskCard from "./TaskCard"

const StatusCard = ({ text }: { text: string }): JSX.Element => {
    return (
        <div className="w-full bg-gray-700 rounded p-4">
            <h6 className="text-gray-400 font-semibold text-center border-b-2 border-b-gray-400 mb-7">{text}</h6>
            <TaskCard text="watch netflix :D" />
            <div className="py-5"></div>
        </div>
    )
}

export default StatusCard
