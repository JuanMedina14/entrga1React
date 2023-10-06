import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1>Laser Shop</h1>
            <section>
                <button>Materiales</button>
                <button>Cortes</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar