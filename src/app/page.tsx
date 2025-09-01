"use client";

import React, { useRef, useState } from "react";
import Image from "next/image"; // Added for Image component

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  const movieList = [
    "/videos/hero-1.mp4",
    "/videos/hero-2.mp4",
    "/videos/hero-3.mp4",
    "/videos/hero-4.mp4",
  ];

  const handleNext = () => {
    const newIndex = (index + 1) % movieList.length;
    setIndex(newIndex);
    if (videoRef.current) {
      videoRef.current.src = movieList[newIndex];
      videoRef.current.play();
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="head-left">
          <Image className="head-left img" src="/images/logo.png" alt="logo" width={100} height={50} />
          <button className="head-left button">Products</button>
        </div>
        <div className="head-right">
          <p><a href="#">NEXUS</a></p>
          <p><a href="#">VAULT</a></p>
          <p><a href="#">ABOUT</a></p>
          <p><a href="#">SERVICES</a></p>
          <p><a href="#">CONTACT</a></p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section autoBlur">
        <div className="hero-vid">
          <video
            ref={videoRef}
            src={movieList[index]}
            loop
            autoPlay
            muted
            playsInline
            className="hero-video"
          />
          <div className="hero-info">
            <h1>REDEFINE</h1>
            <p>Enter the metagame Layer Unleash the play Economy</p>
            <button>Watch Trailer</button>
          </div>
          <h1 className="gaming-text">Gaming</h1>
          <div className="next-btn" onClick={handleNext}>NEXT</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <p>Welcome to Zentry</p>
        <div className="autoBlur">
          <h1>DISCOVER THE WORLD&apos;S LARGEST SHARED ADVENTURE</h1>
        </div>
        <Image className="stones-img" src="/images/stones.png" alt="stones-image" width={800} height={400} />
        <div className="image-box autoTakeFull">
          <Image src="/images/about.webp" alt="about-img" width={1200} height={600} />
        </div>
        <h4>Game of Games begins&#39; your life, now an epic MMORPG</h4>
        <h5>
          Zentry unites every player from countless games and platforms, both digital and physical.
        </h5>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h3>Into the Metagame Layer</h3>
        <p>
          A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure
        </p>

        <div className="info-cards">
          <div className="card autoDisplay">
            <h1>RADIANT</h1>
            <p>An anime and gaming-inspired NFT collection - the IP primed for expansion.</p>
            <video loop autoPlay muted playsInline className="hero-video">
              <source src="/videos/feature-1.mp4" type="video/mp4" />
            </video>
            <button>COMING SOON</button>
          </div>

          <div className="card autoDisplay">
            <h1>ZIGMA</h1>
            <p>
              A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.
            </p>
            <video loop autoPlay muted playsInline className="hero-video">
              <source src="/videos/feature-2.mp4" type="video/mp4" />
            </video>
            <button>COMING SOON</button>
          </div>

          <div className="card autoDisplay">
            <h1>NEXUS</h1>
            <p>
              A gamified social hub, adding a new dimension of play to social interaction for Web3 community.
            </p>
            <video loop autoPlay muted playsInline className="hero-video">
              <source src="/videos/feature-3.mp4" type="video/mp4" />
            </video>
            <button>COMING SOON</button>
          </div>

          <div className="card autoDisplay">
            <h1>AZUL</h1>
            <p>A cross-world AI Agent - elevating your gameplay to be more fun and productive.</p>
            <video loop autoPlay muted playsInline className="hero-video">
              <source src="/videos/feature-4.mp4" type="video/mp4" />
            </video>
            <button>COMING SOON</button>
          </div>

          <div className="card autoDisplay">
            <video loop autoPlay muted playsInline className="hero-video">
              <source src="/videos/feature-5.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="card autoDisplay">
            <h1>MORE COMING SOON</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <p>Join Zentry</p>
        <div className="autoBlur">
          <h1>LET&apos;S BUILD THE NEW ERA OF GAMING TOGETHER</h1>
        </div>
        <button>CONTACT US</button>
        <Image className="img1" src="/images/swordman.webp" alt="contact-img" width={300} height={500} />
        <Image className="img2" src="/images/contact-1.webp" alt="contact-img" width={300} height={500} />
        <Image className="img3" src="/images/contact-2.webp" alt="contact-img" width={300} height={500} />
      </section>

      {/* Footer */}
      <section className="footer">
        <p>@Nova 2025. All rights reserved</p>
        <ul>
                    <li><a href="#" title="YouTube"><i className="bx bxl-youtube"></i></a></li>
          <li><a href="#" title="Twitter"><i className="bx bxl-twitter"></i></a></li>
          <li><a href="#" title="GitHub"><i className="bx bxl-github"></i></a></li>
          <li><a href="#" title="LinkedIn"><i className="bx bxl-linkedin"></i></a></li>
        </ul>
        <p>Privacy Policy</p>
      </section>
    </div>
  );
}
