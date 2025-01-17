import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import responsivdesign from "./assets/img/responsivdesign.png";
import elearning from "./assets/img/elearning.png";
import appMarkIt from "./assets/img/mark_it.png";
import bubbleWeb from "./assets/img/BubbleWeb.mp4";
import photography from "./assets/img/photography.png";
import animationvideos from "./assets/img/animationvideos.png";

function Works() {
  // useEffect(() => {
  //   function setVideoAutoPlay() {
  //     const video = document.querySelector("video");
  //     if (window.innerWidth >= 1500) {
  //       video.autoPlay = true;
  //       video.play();
  //     } else {
  //       video.autoPlay = false;
  //       video.pause();
  //     }
  //   }

  //   setVideoAutoPlay();

  //   window.addEventListener("resize", setVideoAutoPlay);

  //   return () => {
  //     window.removeEventListener("resize", setVideoAutoPlay);
  //   };
  // }, []);

  return (
    <span id="projekte">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          1300: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: true,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
        }}
        id="sliderProject"
        className="swiper mySwiper"
      >
        <SwiperSlide className="swiper-slide active" id="choose-right">
          <img src={elearning} alt="E-Learning" />
          <h4 className="project-categoryIMG">E-Learning</h4>
          <h4 className="project-category">E-Learning</h4>
          <h3 className="project-description">
            <svg
              className="oneProject-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 70 28"
              fill="none"
            >
              <path
                stroke="url(#a)"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M.5 20.5c15.7 2 54.5 5.8 62.5 1 10-6 4.5-16 0-17S12.8-.9 7.5 1.5c-6.5 3-10.5 14 2 22S58 22.5 65 16"
              />
            </svg>
            <svg
              className="oneProject-SVGtwo"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 51 8"
              fill="none"
            >
              <path
                stroke="url(#a)"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.5 4.5c14-.5 42.6-1.2 45 0 3 1.5-45-5-47-2.5S50 8.5 50 6.5c0-1.6-31-.7-46.5 0"
              />
            </svg>
            Zielgruppenorientiertes{" "}
            <a href="/">E-Learning{" "}</a> 
            mit <br />
            CI-konformem Design, intuitiver <br />
            Benutzerführung und ansprechender, kreativer Ästhetik für optimale, lernfreundliche <br />
            Nutzererfahrung.
          </h3>
          {/*  <button className="projectButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="40"
              fill="none"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#A6A6A6"
                  d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C6.85.023 6.18.082 5.517.192a6.665 6.665 0 0 0-1.9.627A6.438 6.438 0 0 0 .193 5.522a12.993 12.993 0 0 0-.179 2.002c-.01.306-.01.614-.015.92V31.56c.005.31.006.611.015.922.008.67.068 1.34.18 2.002.11.663.32 1.305.624 1.904.303.598.701 1.143 1.179 1.614.473.477 1.019.875 1.618 1.179a6.7 6.7 0 0 0 1.901.63c.663.11 1.333.169 2.004.177.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.359 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.27 13.27 0 0 0 2-.177 6.805 6.805 0 0 0 1.908-.631A6.293 6.293 0 0 0 117.666 38a6.403 6.403 0 0 0 1.182-1.614c.302-.6.51-1.242.619-1.904.111-.662.173-1.331.185-2.002.004-.311.004-.612.004-.922.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.57 13.57 0 0 0-.185-2.002 6.648 6.648 0 0 0-.619-1.904 6.469 6.469 0 0 0-2.799-2.8 6.77 6.77 0 0 0-1.908-.627c-.661-.11-1.33-.169-2-.176-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002Z"
                />
                <path
                  fill="#000"
                  d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.696 12.696 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.321 5.321 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.756 5.756 0 0 1 .544-1.662c.26-.518.603-.99 1.015-1.398A5.565 5.565 0 0 1 5.667 1.05C6.287.95 6.915.895 7.543.887l.902-.012h102.769l.913.013a12.37 12.37 0 0 1 1.858.162 5.933 5.933 0 0 1 1.671.548 5.589 5.589 0 0 1 2.415 2.42 5.74 5.74 0 0 1 .535 1.649c.104.624.162 1.255.174 1.887.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93-.011.62-.069 1.24-.171 1.853a5.716 5.716 0 0 1-.54 1.67 5.47 5.47 0 0 1-1.015 1.386 5.414 5.414 0 0 1-1.4 1.022 5.855 5.855 0 0 1-1.668.55c-.618.101-1.243.156-1.869.163-.293.007-.599.011-.897.011l-1.084.002-101.69-.002Z"
                />
                <path
                  fill="#fff"
                  d="M24.769 20.3a4.947 4.947 0 0 1 2.356-4.151 5.065 5.065 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.727c-1.934 3.349-.492 8.27 1.361 10.977.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.963 10.963 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.21a4.873 4.873 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.638 4.638 0 0 0-1.143 3.361 4.1 4.1 0 0 0 3.236-1.53ZM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356Zm-4.243-1.55h3.752l-1.85-5.447h-.051l-1.85 5.448ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046ZM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.069 3.069 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046ZM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.809 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638Zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106ZM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.635c.214-.001.428.022.637.069v1.738a2.591 2.591 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764Zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.293 2.293 0 0 0-2.306 2.298ZM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73h2.155Zm-1.228 5.123h1.125a1.875 1.875 0 0 0 1.967-2.146 1.882 1.882 0 0 0-1.967-2.134h-1.125v4.28ZM41.68 12.444a2.132 2.132 0 1 1 4.248 0 2.134 2.134 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889l-1.237 4.503ZM53.853 10.195h.856v.715h.066a1.349 1.349 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.032 1.032 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM59.094 8.437h.888v6.26h-.888v-6.26ZM61.218 12.444a2.134 2.134 0 1 1 4.247 0 2.133 2.133 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.424c0-.81.604-1.277 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.496 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348Zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.064 1.064 0 0 0 1.166-.983ZM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328Zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526ZM79.23 12.444a2.132 2.132 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.029-.322.044-.484.046-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.749h.715V9.074h.89ZM95.705 8.437h.88v2.482h.07a1.385 1.385 0 0 1 1.374-.807 1.485 1.485 0 0 1 1.55 1.678v2.908h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.05 1.05 0 0 0-1.134 1.142v2.63h-.888V8.437ZM104.761 13.482a1.823 1.823 0 0 1-1.951 1.303 2.047 2.047 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.199 1.29 1.08 1.08 0 0 0 1.072-.546h.855Zm-3.126-1.451h2.275a1.09 1.09 0 0 0-1.109-1.167 1.15 1.15 0 0 0-1.166 1.167Z"
                />
              </g>
            </svg>
          </button>
          <LottieFire /> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" id="mark-it">
          <img src={responsivdesign} alt="Responsives Design" />
          <h4 className="project-categoryIMG">Responsives Design</h4>
          <h4 className="project-category">Responsives Design</h4>
          <h3 className="project-description">
            <svg
              className="twoProject-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 25 41"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.595 6.808C.395 13.608.5 16 3 21.5S12.5 47 16.5 41c1.664-2.496 4.158-8.28 5.595-12.692 2.905-8.917 2.012-17.808 0-21.5-3.712-6.808-14.5-8.5-18.5 0Z"
              />
              <path
                stroke="var(--lightred)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.309 23.237c-3.844 3.694-10.085 1.026-13.816-2.886C1.52 16.183.688 9.385 4.293 5.921c3.603-3.463 10.21-1.731 13.815 1.155 3.604 2.886 6.006 11.544 1.201 16.161Z"
              />
            </svg>
            Drei <strong>responsive Projekte</strong>, <br />
            individuell für Anforderungen und <br />
            Zielgruppen: Ästhetik, 
            Benutzerfreundlichkeit, konsistente <br />
            Navigation – geräteunabhängig.
          </h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" id="promrating">
          <img src={animationvideos} alt="Animationsvideos" />
          <h4 className="project-categoryIMG">Animationsvideos</h4>
          <h4 className="project-category">Animationsvideos</h4>
          <h3 className="project-description">
            <svg
              className="threeProject-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 50 22"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.443 16.102c-.548 1.383-1.167 2.684-1.722 3.798-2.818 5.663-20 5.766-17.977-8.592C2.362-.179 10.364.377 14.161 2.09c9.544 1.345 8.516 8.366 6.282 14.012Zm0 0c8.691 2.403 23 4.96 28.557 11.398"
              />
            </svg>
            Hochwertige <strong>Animationsvideos</strong> verschiedener <br />
            Stilrichtungen, von <strong>minimalistisch bis isometrisch</strong>, <br />
            mit angepassten Grafiken und <strong>präziser</strong>, kreativer Inszenierung.
          </h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" id="Bubble">
          {/* <video src={bubbleWeb} muted loop></video> */}
          <img src={photography} alt="Fotografie" />
          <h4 className="project-categoryIMG">Fotografie</h4>
          <h4 className="project-category">Fotografie</h4>
          <h3 className="project-description">
            <svg
              className="fourProject-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 52 27"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 13C1-2.207 16-.5 24.5 7 27.333 5.167 35.79-2.321 44 2c9.5 5 8 15 1.5 19-6.762 4.161-16 1-21-2C18.5 30 1 28 1 13Z"
              />
            </svg>
            <svg
              className="fourProject-SVGtwo"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 42 37"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M32 .5c0 2.4-7.333 8-11 10.5-3.2 2.338-10.667-2.693-14-5.5.5 2.667 2.6 9.2 3 14 .4 4.8-6.5 9-9.5 10.5 2.667-.5 8.5-1.5 10.5-1.5s4.167 5 5 7.5c2.5-3.167 7.8-9.1 9-7.5 1.5 2 13.5 5 13.5 2.5S34 27 34 23.5c0-2.8 4.667-8.667 7.5-10-3.5.167-9.5 2.4-9.5 0V.5Z"
              />
            </svg>
            <strong>Hochwertige Fotos</strong> durch gezielten <br />
            Einsatz von Belichtung, Tiefenschärfe, kreativem <br />
            Lichtspiel und professioneller Nachbearbeitung.
          </h3>
        </SwiperSlide>
      </Swiper>
    </span>
  );
}

export default Works;
