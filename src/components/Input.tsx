import Button from "./Button"

const Input = ({
    type,
    placeholder,
    name,
    id,
    value,
    onChange,
    submit,
}: {
    type: string
    placeholder: string
    name?: string
    id?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    submit: boolean
}): JSX.Element => {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            />

            {submit ? <Button type="submit" text="submit" /> : " "}
        </div>
    )
}

export default Input
