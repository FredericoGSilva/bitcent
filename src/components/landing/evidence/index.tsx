import Area from "../common/Area";
import ResponsiveImage from "../common/ResponsiveImage";
import Slogan from "./Slogan";
import image from "../../../../public/ImageInEvidence.jpg"

export default function Evidence() {
    return (
        <Area>
            <div className="justify-between flex items-center h-[500px]">
                <Slogan />
                <ResponsiveImage image={image} className="rotate-3 hidden md:inline"/>
            </div>
        </Area>
    )
}