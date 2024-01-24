import { Link } from 'react-router-dom';

function Bantuan() {
    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Beranda</Link>
                        <span>Pusat Bantuan Shopeymart</span>
                    </div>

                    <div className="content">
                        <h1>Hai, ada yang bisa kami bantu?</h1>
                        <h2 className="section-title">Jelajahi dan Temukan Jawaban untuk Pertanyaan Anda</h2>
                        <p>Selamat datang di Pusat Bantuan Shopeymart, tempat Anda dapat menemukan jawaban untuk pertanyaan umum dan mendapatkan bantuan terkait penggunaan aplikasi Shopeymart.</p>

                        <h2 className="section-titl mt-5">Cara Menggunakan Shopeymart</h2>
                        <p>Di Pusat Bantuan Shopeymart, kami menyediakan informasi lengkap tentang cara menggunakan aplikasi kami. Berikut adalah langkah-langkah sederhana:</p>

                        <div className="row">
                            <div className="col-md-4 mt-5">
                                <div className="feature">
                                    <h3 className="feature-title">Temukan Produk</h3>
                                    <small className="feature-subtitle">Telusuri Koleksi Kami</small>
                                    <p>Temukan berbagai produk dari berbagai kategori. Kami menyediakan semua yang Anda butuhkan, dari pakaian hingga elektronik.</p>
                                    <Link to="/products" className="button btn-custom">Jelajahi Produk</Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="feature">
                                    <h3 className="feature-title">Cara Mencari Produk</h3>
                                    <small className="feature-subtitle">Gunakan Fitur Pencarian</small>
                                    <p>Gunakan fitur pencarian di halaman utama yaitu home atau jelajahi kategori produk untuk menemukan barang yang diinginkan.</p>
                                    <Link to="/search" className="button btn-custom">Cara Mencari</Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="feature">
                                    <h3 className="feature-title">Cara Pembayaran</h3>
                                    <small className="feature-subtitle">Metode Pembayaran</small>
                                    <p>Informasi tentang berbagai metode pembayaran yang dapat Anda gunakan, termasuk kartu kredit, transfer bank, dan dompet digital.</p>
                                    <Link to="/payment" className="button btn-custom">Info Pembayaran</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Bantuan;
