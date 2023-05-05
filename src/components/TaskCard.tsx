const TaskCard = ({ text }: { text: string }): JSX.Element => {
    return (
        <div className="w-full bg-slate-900 p-4 rounded mt-2">
            <p className="text-white">{text}</p>
        </div>
    )
}

export default TaskCard
