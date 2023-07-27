export default function Welcome() {
    const user = {nome: 'Fred', email: 'fred@gmail.com'}
    return (
        <div className="text-3xl font-black">
            Olá {user.nome} 👋
            <span className="hidden sm:inline-block">

            </span>
        </div>
    )
}