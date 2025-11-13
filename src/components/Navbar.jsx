import React from "react";

function Navbar() {
    return (
        <nav className="navigasi-utama">
            <div className="logo-utama">Dannys</div>
            <ul className="daftar-menu">
                <li>
                    <a href="#beranda">Beranda</a>
                </li>
                <li>
                    <a href="#kategori">Kategori</a>
                </li>
                <li>
                    <a href="#produk">Produk</a>
                </li>
                <li>
                    <a href="#tentang">Tentang</a>
                </li>
                <li>
                    <a href="#kontak">Kontak</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
