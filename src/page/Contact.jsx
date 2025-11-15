import React from "react";

function Contact() {
    return (
        <section id="kontak" className="bagian-kontak">
            <div className="konten-kontak">
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <h2
                        className="judul-section" style={{  marginTop: '40px' }}
                    >
                        <span>Hubungi Kami</span>
                    </h2>
                </div>
                <div className="info-kontak">
                    <p>
                        Punya pertanyaan, kritik, atau saran? Jangan ragu untuk
                        menghubungi kami — kami siap mendengar dan membantu Anda
                        kapan pun dibutuhkan
                    </p>
                    <div className="bungkus-info">
                        <div className="info-email">
                            <i class="fa fa-envelope"></i>{" "}
                            info@dannys.com
                        </div>

                        <div className="info-telepon">
                            <i class="fa fa-phone"></i> 0812-3456-7890
                        </div>
                    </div>
                </div>

                <div className="bungkus-formulir">
                    <form action="/" method="post" className="formulir">
                        <div className="bagian-input-atas">
                            <div className="kotak-input">
                                <label>Nama Lengkap</label>
                                <input
                                    className="input-kontak"
                                    type="text"
                                    placeholder="Masukkan nama lengkap..."
                                    required
                                />
                            </div>
                            <div className="kotak-input">
                                <label>Alamat Email</label>
                                <input
                                    className="input-kontak"
                                    type="email"
                                    placeholder="Masukkan alamat email..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="bagian-pesan">
                            <label>Pesan</label>
                            <textarea
                                className="input-kontak"
                                placeholder="Tulis pesan Anda di sini..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="tombol-kirim">
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
