type Props = {
    text: string
}

export const TodoItem = ({text}: Props)=> {
    return(
        <>
            <h2 className="text-2xl text-zinc-400 mb-6 font-semibold">To do</h2>
                <div className="flex bg-slate-500/60 rounded-md items-center p-6  transition-all duration-100">
                    <div className="w-6 h-6 rounded-full bg-white cursor-pointer"></div>
                    <span className="text-zinc-300 font-xl ml-8">{text}</span>
                </div>
        </>
    )
}