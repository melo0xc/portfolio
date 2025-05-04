type ButtonProps = {
    value: string;
}

export default function ContentButton({value}: ButtonProps){
    return (
        <div>
            <button className="p-2 w-28 h-10 rounded-lg text-center bg-black text-gray-100 hover:cursor-pointer">
              {value}
            </button>
        </div>
    )
}