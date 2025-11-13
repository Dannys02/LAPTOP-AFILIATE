import React from "react";

function About() {
    return (
        <section id="tentang" className="bagian-tentang">
            <div className="border-judul-section">
                <h2 className="judul-section">
                    Tentang Website Ini
                </h2>
            </div>
            
            <div className="konten-tentang">
              <p>Kami adalah mitra terpercaya Anda dalam memilih laptop yang sempurna sesuai kebutuhan dan anggaran. Dengan ulasan mendalam dan rekomendasi jujur, kami membantu ribuan orang membuat keputusan pembelian yang tepat.</p>
              
              <div className="bungkus-a-tentang">
                <a href="">
                <span>Jelajahi lebih detail</span>
                </a>
              </div>
            </div>
            
            
            {/*<div className="konten-tawarkan">
                <div className="kolom-tawarkan">
                    <i className="fas fa-clock"></i>
                    <h2 className="">Penghematan Waktu</h2>
                    <p>
                        Langsung temukan laptop yang relevan dengan kebutuhan
                        Anda
                    </p>
                </div>

                <div className="kolom-tawarkan">
                    <i className="fas fa-lightbulb"></i>
                    <h2 className="">Kejernihan Informasi</h2>
                    <p>
                        Hindari kebingungan memahami spesifikasi teknis. Kami
                        terjemahkan ke dalam bahasa yang mudah.
                    </p>
                </div>

                <div className="kolom-tawarkan">
                    <i className="fas fa-shield-alt"></i>
                    <h2 className="">Keyakinan dalam Memutuskan</h2>
                    <p>
                        Beli laptop dengan percaya diri, mengetahui bahwa
                        pilihan Anda telah melalui proses kurasi yang ketat.
                    </p>
                </div>
            </div>*/}
        </section>
    );
}

export default About;
