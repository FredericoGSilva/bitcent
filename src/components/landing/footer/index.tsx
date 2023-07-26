import Area from "../common/Area";
import Logo from "../common/Logo";
import SocialNetworks from "./SocialNetworks";

export default function Footer() {
  return (
    <Area className="bg-black py-20">
        <div className="flex flex-col items-center md:items-start">
            <Logo />
            <div className="mt-3 text-zinc-400 text-cen md:text-left">
                <div>Plataforma financeira</div>
                <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">simplifica</span> sua vida</div>
            </div>
      
            <div className="flex flex-col md:flex-row md:justify-between items-center text-transparent mt-14">
                <SocialNetworks />
            </div>
        </div>
    </Area>
  );
}
