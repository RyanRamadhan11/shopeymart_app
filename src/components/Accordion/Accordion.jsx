import React from 'react';
import './Style.css'; // Make sure to import your custom styles

function Accordion() {
  return (
    <div className="row py-5" style={{ marginTop: '5em', marginBottom: '5em' }}>
      <div className="col-sm-6 px-5">
        <h1 className="text-24-bold ps-5" style={{ color: 'white' }}>
          Frequently Asked Question
        </h1>
        <p className="text-16-light ps-5" style={{ color: 'white' }}>
          Beberapa pertanyaan yang sering di tanyakan pembeli...
        </p>
      </div>

      <div className="col-sm-6 pe-5">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={{ background: '#16537e', color: 'white' }} // Apply custom styles here
              >
                Apa itu Shopeymart?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>Shopeymart</strong> adalah platform penjualan online yang menyediakan berbagai produk kebutuhan sehari-hari, termasuk pakaian, elektronik, kebutuhan rumah tangga,
                <code> dan masih banyak lagi</code>.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={{ background: '#ce7e00', color: 'white' }} // Apply custom styles here
              >
                Bagaimana cara menemukan produk yang saya butuhkan?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <p>Gunakan fitur pencarian di halaman utama atau jelajahi kategori produk untuk menemukan barang yang diinginkan. Anda juga dapat menggunakan filter dan sortir hasil pencarian.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style={{ background: '#5b5b5b', color: 'white' }} // Apply custom styles here
              >
                Apa metode pembayaran yang dapat saya gunakan?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <p>Kami menerima berbagai metode pembayaran, termasuk kartu kredit, transfer bank, dan dompet digital. Lihat halaman pembayaran untuk informasi lebih lanjut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
