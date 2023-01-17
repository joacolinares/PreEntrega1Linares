import React from 'react'

export const ItemListContainer = () => {
    return (
        <>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Opciones
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Comprar</a></li>
                        <li><a className="dropdown-item" href="#">Vender</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Cuenta</a></li>
                    </ul>
                </li>

            </ul>
        </>
    )
}
