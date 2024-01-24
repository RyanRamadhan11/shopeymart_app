import React from 'react';
import { Link } from 'react-router-dom';

import about from '../../assets/images/about.jpeg'
import person1 from '../../assets/images/person1.jpeg'
import person2 from '../../assets/images/person2.jpg'
import person3 from '../../assets/images/person3.jpg'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'
import about3 from '../../assets/images/about3.jpg'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";


function About() {

	const products = [
		{
		  id: 1,
		  name: "Product 1",
		  price: "$20",
		  image: about1,
		  icons: [
			{ icon: FaHeart, tooltip: "Add to Wishlist" },
			{ icon: FaShoppingCart, tooltip: "Add to Cart" },
		  ],
		},
		{
		  id: 2,
		  name: "Product 2",
		  price: "$30",
		  image: about2,
		  icons: [
			{ icon: FaHeart, tooltip: "Add to Wishlist" },
			{ icon: FaShoppingCart, tooltip: "Add to Cart" },
		  ],
		},
		{
		  id: 3,
		  name: "Product 3",
		  price: "$25",
		  image: about3,
		  icons: [
			{ icon: FaHeart, tooltip: "Add to Wishlist" },
			{ icon: FaShoppingCart, tooltip: "Add to Cart" },
		  ],
		},
		{
		  id: 3,
		  name: "Product 3",
		  price: "$25",
		  image: about3,
		  icons: [
			{ icon: FaHeart, tooltip: "Add to Wishlist" },
			{ icon: FaShoppingCart, tooltip: "Add to Cart" },
		  ],
		},
		{
			id: 3,
			name: "Product 3",
			price: "$25",
			image: about1,
			icons: [
			  { icon: FaHeart, tooltip: "Add to Wishlist" },
			  { icon: FaShoppingCart, tooltip: "Add to Cart" },
			],
		  },
		  {
			id: 3,
			name: "Product 3",
			price: "$25",
			image: about2,
			icons: [
			  { icon: FaHeart, tooltip: "Add to Wishlist" },
			  { icon: FaShoppingCart, tooltip: "Add to Cart" },
			],
		  },
		// Add more products as needed
	  ];
	  
	  const options = {
		  items: 3,
		  loop: true,
		  margin: 10,
		  autoplay: true,
		  autoplayTimeout: 3000,
		  autoplayHoverPause: true,
		};
	  
    return (
        <main className="main-content">
            <div className="container h-100">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span>About us</span>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <figure><img  style={{height: '18em'}} src={about} alt="figure image" /></figure>
                        </div>
                        <div className="col-md-8" style={{textAlign: 'justify'}}>
                            <p className="leading">Selamat datang di Shopeymart - Jual Beli Online</p>
                            <p>Shopee Indonesia - Jual Beli Online Shopeymart adalah mobile-platform pertama di Asia Tenggara (Indonesia, 
								Filipina, Malaysia, Singapura, Thailand, Vietnam) dan Taiwan yang menawarkan transaksi jual beli 
								online yang menyenangkan, gratis, dan terpercaya via ponsel. Keamanan transaksi kamu terjamin.. Ayo gabung dalam komunitas Shopeymart dan mulai belanja 
								sekarang!</p>
							<p>Bergabunglah dengan jutaan pengguna 
							   lainnya dengan mulai mendaftarkan produk jualan dan berbelanja berbagai penawaran menarik kapan saja, 
							   di mana saja.</p>
                            <p>Keamanan transaksi kamu terjamin.. Ayo gabung dalam komunitas Shopeymart dan mulai belanja sekarang!</p>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-md-12" style={{textAlign: 'justify'}}>
                            <h2 className="section-title">Belanja Online Terpercaya di &amp; Shopeymart App</h2>
                            <p>Temukan apapun kebutuhanmu dengan harga terbaik cuma di Shopeymart. Shopeymart adalah pusat perbelanjaan online di mana kamu bisa mendapatkan update terkini dari penjual yang kamu ikuti, sekaligus dari pengguna favorit kamu. Berbelanja dan berjualan menjadi lebih menyenangkan dengan fitur bagikan ke media sosial, di mana kamu bisa menyebarkan produk yang kamu jual atau pun barang favorit kamu hanya dengan satu klik saja</p>
                            <p>Belanja semua kebutuhanmu di Shopee dengan hati yang tenang! Cek rating dan review toko-toko yang ada dan temukan penjual yang terpercaya dengan mudah. Kami selalu mengutamakan keamanan transaksi untuk para pembeli kami! </p>
                        </div>
                        
                    </div>

                    <h2 className="section-title mt-5 text-center">Our Discount</h2>
					<div className="row">
					<OwlCarousel className="owl-theme" {...options}>
						{products.map((product) => (
						<div className="col-md-12" key={product.id}>
							<div className="card mt-3">
							<img src={product.image} style={{height: '30em'}} className="card-img-top" alt={product.name} />
							{/* <div className="card-body">
								<h5 className="card-title">{product.name}</h5>
								<p className="card-text">{product.price}</p>
								<div className="product-icons">
								{product.icons.map((icon, index) => (
									<span key={index} className="product-icon" title={icon.tooltip}>
									{React.createElement(icon.icon)}
									</span>
								))}
								</div>
							</div> */}
							</div>
						</div>
						))}
					</OwlCarousel>
					</div>

                  
                </div>
            </div>
        </main>
    );
}

export default About;
