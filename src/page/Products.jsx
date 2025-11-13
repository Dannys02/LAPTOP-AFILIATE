import React from "react";

function Products() {
    const produk = [
        {
            image: "https://media.wired.com/photos/5d5ec4d7a9558100099f379e/master/w_2560%2Cc_limit/Gear-Razer-blade-pro-17-source-razer-FATA.jpg",
            title: "Laptop Gaming Pro",
            price: "Rp.15.000.000",
            link: ""
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E-CYQZ-8HcqGtynO-0LKrzMg8XQRKL1CI9vX4_NDWwDT1yVFMYtB2J-K&s=10",
            title: "Laptop Bisnis Elite",
            price: "12.000.000",
            link: ""
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E-CYQZ-8HcqGtynO-0LKrzMg8XQRKL1CI9vX4_NDWwDT1yVFMYtB2J-K&s=10",
            title: "Laptop Budget Friendly",
            price: "6.000.000",
            link: ""
        },
        {
            image: "https://www.unbox.id/wp-content/uploads/2023/04/AnyConv.com__dragonfly-angled.webp",
            title: "Ultrabook Slim",
            price: "10.000.000",
            link: ""
        }
    ];

    return (
        <section id="produk" className="bagian-produk">
            <div className="border-judul-section">
                <h2 className="judul-section">Rekomendasi Laptop Terbaru</h2>
            </div>

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="Cari produk..." />
                </div>
            </div>

            <div className="isi-tombol-kategori">
                <button
                    onClick={() => produkFilter("semua")}
                    className="tombol-kategori"
                    type="submit"
                >
                    Semua
                </button>
                <button
                    onClick={() => produkFilter("Gaming")}
                    className="tombol-kategori"
                    type="submit"
                >
                    Gaming
                </button>
                <button
                    onClick={() => produkFilter("Bisnis")}
                    className="tombol-kategori"
                    type="submit"
                >
                    Bisnis
                </button>
                <button
                    onClick={() => produkFilter("Ultrabook")}
                    className="tombol-kategori"
                    type="submit"
                >
                    Ultrabook
                </button>
                <button
                    onClick={() => produkFilter("Budget")}
                    className="tombol-kategori"
                    type="submit"
                >
                    Budget
                </button>
                <button
                    onClick={() => produkFilter("Profesional")}
                    className="tombol-kategori"
                    type="submit"
                >
                    Profesional
                </button>
            </div>

            <div className="grid-produk">

                {produk.map((produk, index) => (
                                  <div key={index} className="kartu-produk">
                    <div className="produk-img">
                        <img
                            src={produk.image}
                            alt="Laptop Bisnis"
                            className="gambar-produk"
                        />
                    </div>
                    <div className="kartu-isi">
                        <h3 className="nama-produk">{ produk.title }</h3>
                        <p className="harga-produk">{ produk.price }</p>
                        <a href={ produk.link } className="link-afiliasi">
                            Beli Sekarang
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
