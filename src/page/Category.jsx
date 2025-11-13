import React from "react";

function Category() {
    return (
        <section id="kategori" className="bagian-kategori">
            <div className="border-judul-section">
                <h2 className="judul-section">Kategori Laptop</h2>
            </div>

            <div className="daftar-kategori">
                <div className="inner-spinner">
                    <div className="spinner-border"></div>
                    <div className="item-kategori">
                        <i className="fas fa-gamepad ikon-kategori"></i>
                        <h3 className="nama-kategori">Gaming</h3>
                    </div>
                </div>

                <div className="inner-spinner">
                    <div className="spinner-border"></div>
                    <div className="item-kategori">
                        <i className="fas fa-briefcase ikon-kategori"></i>
                        <h3 className="nama-kategori">Bisnis</h3>
                    </div>
                </div>

                <div className="inner-spinner">
                    <div className="spinner-border"></div>
                    <div className="item-kategori">
                        <i className="fas fa-laptop ikon-kategori"></i>
                        <h3 className="nama-kategori">Ultrabook</h3>
                    </div>
                </div>

                <div className="inner-spinner">
                    <div className="spinner-border"></div>
                    <div className="item-kategori">
                        <i className="fas fa-dollar-sign ikon-kategori"></i>
                        <h3 className="nama-kategori">Budget</h3>
                    </div>
                </div>

                <div className="inner-spinner">
                    <div className="spinner-border"></div>
                    <div className="item-kategori">
                        <i className="fas fa-tools ikon-kategori"></i>
                        <h3 className="nama-kategori">Profesional</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;