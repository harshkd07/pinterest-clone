export const LoadingAnimation = ()=>{
    return (
        <div className="inline-block w-5 h-5 border-2 border-t-2 border-r-transparent border-white rounded-full animate-spin"></div>
    );
}

export const Loading = ()=>{
    return(
        <div className="flex text-center items-center justify-center min-h-screen gap-2">
            <div className="blink animate-spin  rounded-full h-14 w-14 border-t-4 border-red-500 "/><span> Ruk ja bsdk...</span>
        </div>
    )
}