
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import SocialNetwork from "./SocialNetwork";

export default function SocialNetworks() {
    return (
        <div className="flex">
            <SocialNetwork icone={<IconBrandYoutube />} url="" />
            <SocialNetwork icone={<IconBrandInstagram />} url="" />
            <SocialNetwork icone={<IconBrandFacebook />} url="" />
            <SocialNetwork icone={<IconBrandGithub />} url="" />
        </div>
    )
}