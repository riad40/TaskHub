const Button = ({ type, text }: { type: "button" | "submit"; text: string }): JSX.Element => {
    return (
        <button
            className="absolute right-2.5 bottom-2.5 font-medium rounded text-sm px-4 py-2 bg-cyan-500 focus:ring-blue-800"
            type={type}
        >
            {text}
        </button>
    )
}

export default Button
