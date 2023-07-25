import Logo from "@/components/landing/common/Logo";
import MenuLogin from "./MenuLogin";
import Area from "@/components/landing/common/Area";

export default function Header() {
  return (
    <Area className="bg-black h-20">
      <div className="flex justify-between items-center">
        <Logo />
        <MenuLogin />
      </div>
    </Area>
  );
}
