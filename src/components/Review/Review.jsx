import React from 'react';
import { Link } from 'react-router-dom'; 

import review1 from "../../assets/images/produk1.jpg"
import review2 from "../../assets/images/produk2.jpg"
import review3 from "../../assets/images/produk3.png"
import review4 from "../../assets/images/produk4.jpg"
import review5 from "../../assets/images/produk5.jpg"
import review6 from "../../assets/images/produk6.jpg"
import review7 from "../../assets/images/produk7.jpg"
import review8 from "../../assets/images/produk8.png"



function Review() {

    const imageStyle = {
        height: '10em',  // Atur tinggi gambar sesuai kebutuhan
    };

    return (
        <main className="main-content mb-5 h-100">
            <div className="container h-100">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span>Products Reviews</span>
                    </div>

                    <div className="filters">
                        <select name="#" id="#" placeholder="Choose Category">
                            <option value="#">All</option>
                            <option value="#">Fashion</option>
                            <option value="#">Food</option>
                            <option value="#">Aksesoris</option>
                            <option value="#">Elektronik</option>
                            <option value="#">Olahraga</option>
                        </select>
                        <select name="#" id="#">
                            <option value="#">2024</option>
                            <option value="#">2023</option>
                            <option value="#">2022</option>
                        </select>
                    </div>

                    <div className="movie-list">
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review1} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">T-Shirt </Link></div>
							<p>Great quality T-shirt! I love the design, and it's very comfortable to wear. Highly recommended!</p>
						</div>
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review2} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">Shoes Running</Link></div>
                            <p>Awesome running shoes! They provide excellent support and cushioning. Perfect for my daily runs.</p>
						</div>
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review3} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">Laptop</Link></div>
                            <p>Stylish and functional laptop bag. It has plenty of compartments and keeps my laptop secure. Love it!</p>
						</div>
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review4} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">Smart Watch</Link></div>
                            <p>Impressive smartwatch! The features are great, and it syncs seamlessly with my smartphone. A must-have!</p>
						</div>
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review5} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">Wireless Sound</Link></div>
                            <p>High-quality wireless earbuds with excellent sound. Comfortable to wear and long battery life. I'm happy with my purchase!</p>
						</div>
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review6} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">Tas Ransel</Link></div>
                            <p>Durable and spacious backpack. It's perfect for travel, and the design is stylish. I highly recommend it!</p>
						</div>
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review7} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">Gaming Mouse</Link></div>
							<p>Excellent gaming mouse with customizable buttons. The ergonomic design enhances my gaming experience. Worth every penny!</p>
                        </div>
						<div className="movie">
							<div className="movie-poster" style={imageStyle}><img src={review8} alt="#" /></div>
							<div className="movie-title"><Link style={{color: 'black', fontWeight: 'bold'}} to="">Smartphone</Link></div>
							<p>Ulasan film Movie 8 Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
					</div> 

                    <div className="pagination mt-5">
                        <Link to="#" className="page-number prev mt-2"><i className="fa fa-angle-left"></i></Link>
                        <span className="page-number current mt-2">1</span>
                        <Link to="#" className="page-number mt-2">2</Link>
                        <Link to="#" className="page-number mt-2">3</Link>
                        <Link to="#" className="page-number mt-2">4</Link>
                        <Link to="#" className="page-number mt-2">5</Link>
                        <Link to="#" className="page-number next mt-2"><i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Review;
