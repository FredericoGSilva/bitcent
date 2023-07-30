import fakeUser from "@/data/constants/FakeUser"

export default function UserInformation() {
    const user = {nome: 'João', email: 'jjjoao@gmail.com'}
    return (
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex flex-col select-none text-right">
                <span className="text-sm font-bold text-zinc-200">{fakeUser.name}</span>
                <span className="text-sm text-zinc-400">{fakeUser.email}</span>
            </div>
        </div>
    )
}