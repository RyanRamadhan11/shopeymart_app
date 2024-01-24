import React from "react";
import Slide1 from "../../assets/images/banner1.jpg"
import Slide2 from "../../assets/images/banner2.jpg"
import Slide3 from "../../assets/images/banner3.jpg"
import Thumb1 from "../../assets/images/side1.jpg"
import Thumb2 from "../../assets/images/side2.jpg"
import Thumb3 from "../../assets/images/home/thumb3.jpg"
import Product1 from "../../assets/images/product1.jpg"
import Product2 from "../../assets/images/Product2.jpg"
import Product3 from "../../assets/images/Product3.jpg"
import Product4 from "../../assets/images/Product4.jpg"
import { Link } from "react-router-dom";

import { Carousel } from "react-bootstrap";

function Hero() {
  return (
    <main className="main-content">
      <div className="container-fluid">
        <div className="page">
          <div className="row">
            <div className="col-md-9">
				<Carousel>
					<Carousel.Item>
						<a href="#">
						<img className="d-block w-100" src={Slide1} alt="Slide 1" />
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<a href="#">
						<img className="d-block w-100" src={Slide2} alt="Slide 2" />
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<a href="#">
						<img className="d-block w-100" src={Slide3} alt="Slide 3" />
						</a>
					</Carousel.Item>
				</Carousel>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href="#">
                      <img src={Thumb1} alt="Movie 1" />
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href="#">
                      <img src={Thumb2} alt="Movie 2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

		  <div className="row">
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product1} className="card-img-top" style={{height: '23em'}}  alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Shoes Casual</h3>
					<p className="card-title">Rp. 125.000</p>
					<p className="card-title">Kategori : Fashion</p>
					<Link href="#" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product2} className="card-img-top" style={{height: '23em'}} alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Burger</h3>
					<p className="card-title">Rp. 45.000</p>
					<p className="card-title">Kategori : Food</p>
					<Link href="#" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product3} className="card-img-top" style={{height: '23em'}}  alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Premium PSD</h3>
					<p className="card-title">Rp. 155.000</p>
					<p className="card-title">Kategori : Food</p>
					<Link href="#" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product4} className="card-img-top" style={{height: '23em'}}  alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Kacamata</h3>
					<p className="card-title">Rp. 30.000</p>
					<p className="card-title">Kategori : Aksesoris</p>
					<Link href="#" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
		  </div>

		  <div className="row">
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product1} className="card-img-top" style={{height: '23em'}}  alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Shoes Casual</h3>
					<p className="card-title">Rp. 125.000</p>
					<p className="card-title">Kategori : Fashion</p>
					<Link href="#" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product2} className="card-img-top" style={{height: '23em'}} alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Burger</h3>
					<p className="card-title">Rp. 45.000</p>
					<p className="card-title">Kategori : Food</p>
					<Link href="#" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product3} className="card-img-top" style={{height: '23em'}}  alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Premium PSD</h3>
					<p className="card-title">Rp. 155.000</p>
					<p className="card-title">Kategori : Food</p>
					<Link href="#" variant="success" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="card mt-4">
				<img src={Product4} className="card-img-top" style={{height: '23em'}}  alt="Movie 3"/>
				<div className="card-body">
					<h3 className="card-title">Kacamata</h3>
					<p className="card-title">Rp. 30.000</p>
					<p className="card-title">Kategori : Aksesoris</p>
					<Link href="#" className="btn btn-info mt-3">Detail</Link>
				</div>
				</div>
			</div>
		  </div>



          <div className="row" style={{marginTop: '10em', marginBottom: '10em'}}>
			<div className="col-md-4" style={{color: 'white'}}>
				<h2 className="section-title">Februari Discount</h2>
				<p>
					Beberap film yang akan tayang dibulan februari
				</p>
				<ul className="movie-schedule">
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 1</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 2</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 3</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 4</a>
					</h2>
					</li>
				</ul>
			</div>
			<div className="col-md-4"  style={{color: 'white'}} >
				<h2 className="section-title">Maret Discount</h2>
				<p>
					Beberapa Store yang akan ada discount dibulan Maret
				</p>
				<ul className="movie-schedule">
					<li>
					<div className="date">03/03</div>
					<h2 className="entry-title">
						<a href="#">Store 1</a>
					</h2>
					</li>
					<li>
					<div className="date">03/04</div>
					<h2 className="entry-title">
						<a href="#">Store 2</a>
					</h2>
					</li>
					<li>
					<div className="date">03/05</div>
					<h2 className="entry-title">
						<a href="#">Store 3</a>
					</h2>
					</li>
					<li>
					<div className="date">03/06</div>
					<h2 className="entry-title">
						<a href="#">Store 4</a>
					</h2>
					</li>
				</ul>
			</div>
			<div className="col-md-4"  style={{color: 'white'}}>
				<h2 className="section-title">April Discount</h2>
				<p>
					Beberapa Store yang akan ada discount dibulan April
				</p>
				<ul className="movie-schedule">
					<li>
					<div className="date">04/04</div>
					<h2 className="entry-title">
						<a href="#">Store 1</a>
					</h2>
					</li>
					<li>
					<div className="date">04/05</div>
					<h2 className="entry-title">
						<a href="#">Store 2</a>
					</h2>
					</li>
					<li>
					<div className="date">04/05</div>
					<h2 className="entry-title">
						<a href="#">Store 3</a>
					</h2>
					</li>
					<li>
					<div className="date">04/06</div>
					<h2 className="entry-title">
						<a href="#">Store 4</a>
					</h2>
					</li>
				</ul>
			 </div>
		  </div>
		</div>
	  </div>
    </main>
  );
}

export default Hero;
