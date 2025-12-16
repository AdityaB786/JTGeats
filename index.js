document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }

  //Kitchen Section Data
  const kitchenItems = [
    {
      img: "assests/Kitchensection/pizza1.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
    },
    {
      img: "assests/Kitchensection/pizza2.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
    },
    {
      img: "assests/Kitchensection/pizza3.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
    },
    {
      img: "assests/Kitchensection/pizza4.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
    },
    {
      img: "assests/Kitchensection/pizza5.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
    },
    {
      img: "assests/Kitchensection/pizza6.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
    },
    {
      img: "assests/Kitchensection/pizza7.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
    },
    {
      img: "assests/Kitchensection/pizza8.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
    },
    {
      img: "assests/Kitchensection/pizza1.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
    },
    {
      img: "assests/Kitchensection/pizza2.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
    },
    {
      img: "assests/Kitchensection/pizza3.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      
    },
    {
      img: "assests/Kitchensection/pizza4.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
      
    },
  ];

  const kitchenGrid = document.getElementById("kitchenGrid");

  if (kitchenGrid) {
    kitchenItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("kitchen-card");

      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="dish-img" />
        ${
          item.offer
            ? `<img src="${item.offer}" alt="Offer" class="offer-tag" />`
            : ""
        }
        <div class="card-body">
          <div class="inner-body">
            <div class="dish-info">
              <h3 class="dish-title">${item.title}</h3>
              <div class="dish-meta">
                <span class="dish-price">${item.price}</span>
              </div>
            </div>
            <div class="dish-icons">
              <div class="left-icons">
                <div class="left-bg">
                  <img src="assests/Kitchensection/ant-design_star-filled.png" alt="Rating" class="star-icon" />
                  <p class="rating">${item.rating}</p>
                </div>
                <img src="${item.time}" alt="Time" class="time-icon" />
              </div>
<button class="add-btn plus-only" aria-label="Add item">+</button>
            </div>
          </div>
        </div>
      `;

      kitchenGrid.appendChild(card);
    });
  }

  //Polpular Items Section
  const popularItems = [
    {
      img: "assests/Kitchensection/tandoori-chicken.png",
      title: "Tandoori Chicken",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time2.png",
      offer: "assests/Kitchensection/offer2.png",
    },
    {
      img: "assests/Kitchensection/chilli-chicken.png",
      title: "Chilli Chicken",
      price: "₹184",
      rating: "4.3",
      time: "assests/Kitchensection/time3.png",
      offer: "assests/Kitchensection/offer.png",
    },
    {
      img: "assests/Kitchensection/pizza6.png",
      title: "Fresh Pizza",
      price: "₹116",
      rating: "4.1",
      time: "assests/Kitchensection/time.png",
      offer: null,
    },
    {
      img: "assests/Kitchensection/pizza2.jpg",
      title: "Cheese Burst Pizza",
      price: "₹150",
      rating: "4.5",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
    },
    {
      img: "assests/Kitchensection/pizza1.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
    },
  ];

  const swiperWrapper = document.querySelector(
    ".popular-swiper .swiper-wrapper"
  );

  if (swiperWrapper) {
    popularItems.forEach((item) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      slide.innerHTML = `
        <div class="kitchen-card">
          <img src="${item.img}" alt="${item.title}" class="dish-img" />
          ${
            item.offer
              ? `<img src="${item.offer}" alt="Offer" class="offer-tag" />`
              : ""
          }
          <div class="card-body">
            <div class="inner-body">
              <div class="dish-info">
                <h3 class="dish-title">${item.title}</h3>
                <div class="dish-meta">
                  <span class="dish-price">${item.price}</span>
                </div>
              </div>
              <div class="dish-icons">
                <div class="left-icons">
                  <div class="left-bg">
                    <img src="assests/Kitchensection/ant-design_star-filled.png" alt="Rating" class="star-icon" />
                    <p class="rating">${item.rating}</p>
                  </div>
                  <img src="${item.time}" alt="Time" class="time-icon" />
                </div>
<button class="add-btn plus-only" aria-label="Add item">+</button>
              </div>
            </div>
          </div>
        </div>
      `;

      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    if (typeof Swiper !== "undefined") {
      new Swiper(".popular-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        },
      });
    }
  }

  //Request Dish Modal
  const requestDishBtn = document.getElementById("requestDishBtn");
  const modal = document.getElementById("requestDishModal");
  const closeBtn = document.querySelector(".close-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.querySelector(".submit-btn");

  const closeModal = () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  };
  // Request Dish Form Submit
  const requestDishForm = document.getElementById("requestDishForm");

  if (requestDishForm) {
    requestDishForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully");
      closeModal();
    });
  }

  if (requestDishBtn && modal) {
    requestDishBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.classList.add("modal-open");
    });
  }

  if (submitBtn) submitBtn.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  //Service Section Video
  const video = document.getElementById("serviceVideo");
  const playBtn = document.getElementById("playBtn");

  function toggleVideo() {
    if (video.paused) {
      video.play();
      playBtn.style.display = "none";
    } else {
      video.pause();
      playBtn.style.display = "flex";
    }
  }

  if (playBtn && video) {
    playBtn.addEventListener("click", toggleVideo);
    video.addEventListener("click", toggleVideo);

    video.addEventListener("ended", () => {
      playBtn.style.display = "flex";
    });
  }

  // ADD → COUNTER
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-btn");
    if (!addBtn) return;

    addBtn.outerHTML = `
    <div class="counter">
      <button class="qty-btn minus">−</button>
      <span class="qty">1</span>
      <button class="qty-btn plus">+</button>
    </div>
  `;
  });

  // COUNTER HANDLER
  document.addEventListener("click", (e) => {
    const counter = e.target.closest(".counter");
    if (!counter) return;

    const qtyEl = counter.querySelector(".qty");
    let qty = Number(qtyEl.textContent);

    // INCREASE
    if (e.target.classList.contains("plus")) {
      if (qty >= 5) {
        alert("Maximum quantity reached");
        return;
      }
      qtyEl.textContent = qty + 1;
    }

    // DECREASE
    if (e.target.classList.contains("minus")) {
      if (qty === 1) {
counter.outerHTML = `<button class="add-btn plus-only">+</button>`;
      } else {
        qtyEl.textContent = qty - 1;
      }
    }
  });
  // Contact Form Submit Alert
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Our manager will contact you within 48 hours");
    contactForm.reset();
  });
}

//Search Form Scroll
const heroSearchForm = document.querySelector(".search-box");

if (heroSearchForm) {
  heroSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document
      .getElementById("home-kitchen")
      .scrollIntoView({ behavior: "smooth" });
  });
}

});
