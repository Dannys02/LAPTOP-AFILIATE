import React from "react";

export default function AboutDetail() {
  return (
    <div className="min-h-screen text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 py-[150px]">
          <h1 className="text-4xl font-bold text-white mb-4">
            Tentang Program Afiliasi Kami
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bergabunglah dengan jaringan afiliasi profesional kami dan mulailah 
            menghasilkan pendapatan pasif dengan merekomendasikan produk berkualitas.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Sebagai platform afiliasi terpercaya, kami menyediakan sistem 
                yang transparan, komisi kompetitif, dan dukungan penuh untuk 
                kesuksesan partnership Anda.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Keunggulan Program
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Komisi hingga 30% per penjualan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Cookie tracking 90 hari</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Pembayaran tepat waktu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Material promosi lengkap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Dukungan affiliate manager</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Performa Jaringan
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">10K+</div>
                  <div className="text-gray-400 text-sm">Affiliate Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$5M+</div>
                  <div className="text-gray-400 text-sm">Komisi Dibayar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">95%</div>
                  <div className="text-gray-400 text-sm">Kepuasan Partner</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Cara Bergabung
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </div>
                  <span className="text-gray-300">Daftar akun affiliate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </div>
                  <span className="text-gray-300">Pilih produk untuk dipromosikan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </div>
                  <span className="text-gray-300">Dapatkan link afiliasi</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    4
                  </div>
                  <span className="text-gray-300">Mulai promosi dan dapatkan komisi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Siap Menghasilkan Pendapatan?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Bergabung sekarang dan mulai bangun bisnis afiliasi yang menguntungkan 
            bersama ribuan partner lainnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Daftar Sekarang
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
