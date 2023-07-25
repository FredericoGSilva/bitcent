export default function Slogan() {
    function renderizarFrasePrincipal() {
        return (
            <div className={`
                flex flex-col items-center md:items-start
                text-3xl sm:text-4x1 lg:text-6xl text-white font-light
            `}>
                <span>Melhor maneira</span>
                <span>de organizar</span>
                <span>seu dinheiro</span>
            </div>
        )
    }

    return (
        <div>
            {renderizarFrasePrincipal()}
        </div>
    )
}