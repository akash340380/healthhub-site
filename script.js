// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

// Hamburger Toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Scroll Fade-in Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function setDarkMode(isDark) {
  body.classList.toggle('dark-mode', isDark);
  localStorage.setItem('dark-mode', isDark);
}

document.addEventListener('DOMContentLoaded', () => {
  const darkPref = localStorage.getItem('dark-mode') === 'true';
  setDarkMode(darkPref);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', isDark);
    });
  }
});

const menuData = {
  monday: {
    title: "Pain Relief Medicines",
    details: "Paracetamol, ibuprofen, muscle relaxants, and topical gels.",
    price: "₹20",
    medicines: [
      { name: "Paracetamol", price: "₹20" },
      { name: "Ibuprofen", price: "₹25" },
      { name: "Volini Gel", price: "₹80" },
      { name: "Flexon MR", price: "₹60" }
    ]
  },
  tuesday: {
    title: "Diabetes Care",
    details: "Metformin, insulin pens, test strips, and monitoring tools.",
    price: "₹100",
    medicines: [
      { name: "Metformin", price: "₹50" },
      { name: "Insulin Pen", price: "₹300" },
      { name: "Accu-Chek Strips", price: "₹500" },
      { name: "Glucometer", price: "₹1200" }
    ]
  },
  wednesday: {
    title: "Heart Health",
    details: "Statins, beta blockers, aspirin, and BP monitors.",
    price: "₹120",
    medicines: [
      { name: "Atorvastatin", price: "₹90" },
      { name: "Aspirin", price: "₹30" },
      { name: "Beta Blocker", price: "₹100" },
      { name: "BP Monitor", price: "₹1500" }
    ]
  },
  thursday: {
    title: "Cold & Flu Relief",
    details: "Cough syrups, antihistamines, steamers, and lozenges.",
    price: "₹30",
    medicines: [
      { name: "Benadryl", price: "₹85" },
      { name: "Cetrizine", price: "₹10" },
      { name: "Vicks Vaporub", price: "₹50" },
      { name: "Steamer", price: "₹500" }
    ]
  },
  friday: {
    title: "Skin & Personal Care",
    details: "Moisturizers, antifungal creams, acne gels, and SPF creams.",
    price: "₹50",
    medicines: [
      { name: "Acnestar Gel", price: "₹95" },
      { name: "Moisturizer", price: "₹200" },
      { name: "SPF 50 Sunscreen", price: "₹300" },
      { name: "Clotrimazole Cream", price: "₹40" }
    ]
  }
};


document.querySelectorAll('.menu-btn').forEach(button => {
  button.addEventListener('click', () => {
    const day = button.dataset.menu;
    const data = menuData[day];
    
    document.getElementById('menuTitle').textContent = data.title;
    document.getElementById('menuDetails').textContent = data.details;
    document.querySelector('.price-value').textContent = data.price;

    const medicineList = document.getElementById('medicineList');
    medicineList.innerHTML = ''; // Clear previous

    data.medicines.forEach(med => {
      const card = document.createElement('div');
      card.className = 'medicine-card';
      card.innerHTML = `<h4>${med.name}</h4><p>${med.price}</p>`;
      medicineList.appendChild(card);
    });
  });
});
