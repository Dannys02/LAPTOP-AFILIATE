import React from "react";
import { Link } from 'react-router-dom';

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
                <Link className="Link" to="/aboutDetail">
                <span>Jelajahi lebih detail</span>
                </Link>
              </div>
            </div>
        </section>
    );
}

export default About;
