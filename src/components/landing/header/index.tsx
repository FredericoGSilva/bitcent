import Logo from "@/components/common/Logo";
import MenuLogin from "./MenuLogin";
import Area from "@/components/common/Area";

export default function Header() {
  return (
    <Area>
      <div className="flex justify-between items-center">
        <Logo />
        <MenuLogin />
      </div>
    </Area>
  );
}
