interface AreaProps {
    children?: any
    className?: string
}

export default function Area(props: AreaProps) {
    return (
        <div className="flex justify-center w-full bg-black h-20">
            <div className="px-7 xl:px-0 w-full xl:w-[1200px]">
                {props.children}
            </div>
        </div>
    )
}