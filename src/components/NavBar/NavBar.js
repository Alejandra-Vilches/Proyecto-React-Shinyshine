import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h2>Shinyshine</h2>
            <div>
                <button> Beauty Boxes</button>
                <button> Beauty Packs</button>
                <button> Uñas Impress</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar