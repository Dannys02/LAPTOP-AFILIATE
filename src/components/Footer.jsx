import React from "react";

function Footer() {
    return (
        <footer className="bagian-footer">
            <div className="konten-footer">
                <div className="kolom-footer">
                    <h3 className="judul-kolom">Dannys Afiliasi</h3>
                    <p>
                        Temukan laptop impian Anda dengan mudah melalui
                        rekomendasi kami.
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="kolom-footer">
                    <h3 style={{ textAlign: "center" }} className="judul-kolom">
                        Link Cepat
                    </h3>
                    <ul className="daftar-footer">
                        <li>
                            <a href="#beranda">Beranda</a>
                        </li>
                        <li>
                            <a href="#produk">Produk</a>
                        </li>
                        <li>
                            <a href="#kategori">Kategori</a>
                        </li>
                        <li>
                            <a href="#tentang">Tentang</a>
                        </li>
                        <li>
                            <a href="#kontak">Kontak</a>
                        </li>
                    </ul>
                </div>
                <div className="kolom-footer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3 className="judul-kolom" style={{ textAlign: 'center' }}>Kontak Kami</h3>
                    <ul className="daftar-footer">
                        <li>Email: info@dannys.com</li>
                        <li>Telepon: +62 123 456 789</li>
                        <li>Alamat: Jakarta, Indonesia</li>
                    </ul>
                </div>
            </div>
            <div className="hak-cipta">
                <p>&copy; 2025 Dannys Afiliasi. Semua hak dilindungi.</p>
            </div>
        </footer>
    );
}

export default Footer;
