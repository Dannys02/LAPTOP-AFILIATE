import { useEffect } from "react";
import { ScrollAnimation } from "../components/scrollAnimation";

function Hero() {
    {
        /* Adalah Cara Memanggil JS vanila*/
    }
    useEffect(() => {
        setTimeout(() => {
            ScrollAnimation();
        }, 100);
    }, []);

    return (
        <section id="beranda" className="bagian-hero">
            <div className="container-hero">
                <h1 className="judul-hero">
                    Temukan Laptop Terbaik untuk Kebutuhan Anda
                </h1>
                <p className="deskripsi-hero">
                    Kami menyediakan rekomendasi laptop berkualitas dengan link
                    afiliasi terpercaya. Mulai jelajahi sekarang!
                </p>
                <div style={{ display: "flex", gap: "15px" }}>
                    <a href="#produk" className="tombol-utama">
                      <span>Lihat Produk</span>
                    </a>
                    <a href="#produk" className="tombol-utama-chat">
                        <span>Hubungi Kami</span>
                    </a>
                </div>
            </div>

            <div className="hero-rotasi-wrapper">
                <div className="container-hero-2">
                    <div className="scroll-main">
                        <div className="kotak-i" style={{ marginTop: "15px" }}>
                            <img
                                src="https://gadgetren.com/wp-content/uploads/2019/08/Samsung-Galaxy-Book-S-Feature.jpg"
                                alt=""
                            />
                        </div>

                        <div className="kotak-i">
                            <img
                                src="https://m.media-amazon.com/images/I/61E7wn7WEGL.jpg"
                                alt=""
                            />
                        </div>
                        <div className="kotak-i">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0Hf1DkUQLymAlMRYNylE2YpFHqCt4iufP1WD4BsPPw&s=10"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="container-hero-2-2">
                    <div className="scroll-main-reverse">
                        <div className="kotak-i">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0Hf1DkUQLymAlMRYNylE2YpFHqCt4iufP1WD4BsPPw&s=10"
                                alt=""
                            />
                        </div>
                        <div className="kotak-i">
                            <img
                                src="https://m.media-amazon.com/images/I/61E7wn7WEGL.jpg"
                                alt=""
                            />
                        </div>
                        <div className="kotak-i" style={{ marginTop: "15px" }}>
                            <img
                                src="https://gadgetren.com/wp-content/uploads/2019/08/Samsung-Galaxy-Book-S-Feature.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
