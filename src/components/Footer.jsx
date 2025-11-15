import React from "react";

function Footer() {
    return (
        <footer className="bagian-footer">
            <div className="konten-footer">
                <div className="kolom-footer">
                    <h3 className="judul-kolom after:bg-blue-500 w-fit">
                        Dannys Afiliasi
                    </h3>
                    <p>
                        Temukan laptop impian Anda dengan mudah melalui
                        rekomendasi kami.
                    </p>
                </div>
                <div className="kolom-footer flex flex-col items-center">
                    <div>
                        <h3 className="judul-kolom after:bg-blue-500 w-fit">
                            Link Cepat
                        </h3>

                        <ul className="daftar-footer flex flex-col gap-2 w-fit">
                            <a href="#beranda">Beranda</a>
                            <a href="#produk">Produk</a>
                            <a href="#kategori">Kategori</a>
                            <a href="#tentang">Tentang</a>
                            <a href="#kontak">Kontak</a>
                        </ul>
                    </div>
                </div>

                <div className="kolom-footer">
                    <h3 className="judul-kolom after:bg-blue-500 w-fit">
                        Kontak Kami
                    </h3>
                    <ul className="daftar-footer text-[15px]">
                        <li>Email: info@dannys.com</li>
                        <li>Telepon: +62 123 456 789</li>
                        <li>Alamat: Jakarta, Indonesia</li>
                    </ul>
                </div>
                <div className="kolom-footer">
                    <h3 className="judul-kolom w-fit after:bg-blue-500">
                        Media Sosial
                    </h3>
                    <p>Kunjungi media sosial kami</p>
                    <div className="flex justify-center gap-6 mt-3">
                        <a href="#">
                            <i class="fa-brands fa-tiktok text-2xl transition-colors duration-300 hover:text-blue-500"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-instagram text-2xl transition-colors duration-300 hover:text-blue-500"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-whatsapp text-2xl transition-colors duration-300 hover:text-blue-500"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hak-cipta">
                <p>&copy; 2025 Dannys Afiliasi. Semua hak dilindungi.</p>
            </div>
        </footer>
    );
}

export default Footer;
