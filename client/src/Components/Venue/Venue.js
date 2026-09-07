import React, { useEffect, useState } from "react";
import "./Venue.css";
import venuePhoto from "./venue-photo.webp";
import venueSlide3 from "./venue-slide-3.jpeg";
import venueSlide4 from "./venue-slide-4.jpg";
import venueSlide5 from "./venue-slide-5.jpg";
import venueSlide6 from "./venue-slide-6.jpeg";
import venueIcon from "./venue-icon.svg";
import blobTopLeft from "./blob-topleft.svg";
import ringTopLeft from "./ring-topleft.svg";
import blobRight from "./blob-right.svg";
import blobBottomRight from "./blob-bottomright.svg";
import photoFrame from "./photo-frame.svg";
import arcSwirl from "./arc-swirl.svg";

const venueSlides = [
  { src: venuePhoto, alt: "Thapar Institute of Engineering and Technology campus entrance" },
  { src: venueSlide3, alt: "Thapar Institute campus building" },
  { src: venueSlide4, alt: "Thapar University student residences masterplan" },
  { src: venueSlide5, alt: "Central Library, Thapar Institute" },
  { src: venueSlide6, alt: "Thapar Institute campus view" },
];

export default function Venue() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % venueSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="venue-section" id="venue">
      <div className="venue">
        <img
          className="venue-decor venue-blob-topleft"
          src={blobTopLeft}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-ring-topleft"
          src={ringTopLeft}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-blob-right"
          src={blobRight}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-blob-bottomright"
          src={blobBottomRight}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-arc venue-arc-1"
          src={arcSwirl}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-arc venue-arc-2"
          src={arcSwirl}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-arc venue-arc-3"
          src={arcSwirl}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-photo-frame"
          src={photoFrame}
          alt=""
          aria-hidden="true"
        />

        <div className="venue-image-wrap">
          <div className="venue-slideshow">
            {venueSlides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={
                  "venue-image venue-slide" +
                  (index === activeSlide ? " venue-slide-active" : "")
                }
              />
            ))}
          </div>

          <div className="venue-slideshow-dots" role="tablist" aria-label="Venue photos">
            {venueSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={
                  "venue-slideshow-dot" +
                  (index === activeSlide ? " venue-slideshow-dot-active" : "")
                }
                aria-label={"Show venue photo " + (index + 1)}
                aria-selected={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="venue-text">
          <h3 className="venue-subtitle">The Institute</h3>

          <p className="venue-description">
            Thapar Institute of Engineering and Technology (TIET) is one of
            India&apos;s oldest and finest educational institutions, which
            provides a steady source of highly skilled talent to the nation
            and overseas. Founded in 1956 with a campus spread across
            sprawling 250 acres, the institute in Patiala has been a pioneer
            in engineering education, research, and innovation. Our
            community involves ingenious minds solvers eager to make the
            world a better place to live in with their innovative techniques
            and discoveries. Rated amongst the country&apos;s top-ranked
            innovation-driven private universities and technical institutes,
            TIET has been accredited with an A++ grade by the National
            Assessment and Accreditation Council (NAAC). Currently, the
            institute is ranked 26th in the country in the University
            category and 29th in the Engineering category by NIRF. Our alumni
            have stood out in various fields, such as business and industry,
            administrative and regulatory services, research and education,
            and social and human rights organizations.
          </p>
        </div>

        <img
          className="venue-decor venue-icon venue-icon-top"
          src={venueIcon}
          alt=""
          aria-hidden="true"
        />

        <img
          className="venue-decor venue-icon venue-icon-bottom"
          src={venueIcon}
          alt=""
          aria-hidden="true"
        />

        <h2 className="venue-title">VENUE</h2>
      </div>
    </section>
  );
}
