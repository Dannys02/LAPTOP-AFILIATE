import React from "react";
import { Link } from 'react-router-dom';

export default function NavbarAbout() {
    return (
        <nav className="navigasi-utama">
            <div className="logo-utama">Dannys</div>
            <ul className="daftar-menu">
                <Link to={{ pathname: "/", hash: "#beranda" }}>Beranda</Link>
                <Link to={{ pathname: "/", hash: "#kategori" }}>Kategori</Link>
                <Link to={{ pathname: "/", hash: "#produk" }}>Produk</Link>
                <Link to={{ pathname: "/", hash: "#tentang" }}>Tentang</Link>
                <Link to={{ pathname: "/", hash: "#kontak" }}>Kontak</Link>
            </ul>
        </nav>
    );
}