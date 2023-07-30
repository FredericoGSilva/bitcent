import FakeUser from "@/data/constants/FakeUser";

export default function Welcome() {
    return (
        <div className="text-3xl font-black">
            Olá {' '} 
            <span className="hidden sm:inline-block">
                {FakeUser?.name?.split(' ')[0]} {' '}👋
            </span>
        </div>
    )
}