const Title = ({children}) =>{
    return (
        <div className="relative py-5 text-center  ps-3">
            <h2 className="text-5xl text-orange-500 font-bold">{children}</h2>
            <p className="absolute bottom-0 left-[10%] right-[10%] text-8xl -z-10 opacity-5">{children}</p>
        </div>
    )
}
export default Title;