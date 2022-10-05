import {useTheme} from "../hooks/useTheme";

export default function FontSize(){

    const { changeFontSize } = useTheme()

    const handleClick = () => {
        return changeFontSize()
    }

    return (
        <div className={"flex gap-4"}>
            {/*<span className={"text-green-900 cursor-pointer"} onClick={() => handleClick('decrease')}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" fill={"currentColor"} height="36" width="36" viewBox="0 0 48 48">*/}
            {/*        <path d="m2 38 11-28h4l11 28h-3.75l-2.85-7.5H8.6L5.75 38Zm7.8-10.7h10.4l-5.1-13.55h-.2Zm20.7-1.8v-3H46v3Z"/>*/}
            {/*    </svg>*/}
            {/*</span>*/}
            {/*<span className={"text-red-900 cursor-pointer"} onClick={() => handleClick('increase')}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" fill={"currentColor"} height="36" width="36" viewBox="0 0 48 48">*/}
            {/*        <path d="m2 38 11-28h4l11 28h-3.75l-2.85-7.5H8.6L5.75 38Zm7.8-10.7h10.4l-5.1-13.55h-.2ZM36.5 32v-6.5H30v-3h6.5V16h3v6.5H46v3h-6.5V32Z"/>*/}
            {/*    </svg>*/}
            {/*</span>*/}
            <span className={"text-cyan-500 cursor-pointer"} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 48 48">
                    <path d="M14.5 40V13H4V8h26v5H19.5v27Zm18 0V23H26v-5h18v5h-6.5v17Z" fill={"currentColor"}/>
                </svg>
            </span>
        </div>
    )
}