import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navigasi-utama">
            <div className="logo-utama">Dannys</div>
            <ul className="daftar-menu">
                <a href="#beranda">Beranda</a>
                <a href="#kategori">Kategori</a>
                <a href="#produk">Produk</a>
                <a href="#tentang">Tentang</a>
                <a href="#kontak">Kontak</a>
            </ul>
        </nav>
    );
}

export default Navbar;
