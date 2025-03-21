function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

loco();
// used in page 2 
var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

// Animate Sustainable Stats
gsap.from(".stat-card", {
    scrollTrigger: {
        trigger: "#page6",
        start: "top 70%",
        end: "bottom 30%",
        scroller: "#main",
        scrub: 0.5,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out"
});



    
    

function animateTestimonials() {
    gsap.from(".testimonial", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%",
            end: "bottom 60%",
            scroller: "#main",
            scrub: 0.5,
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out"
    });
}

animateTestimonials();

// Animate elements on page 10
gsap.from(".right10-inner", {
    scrollTrigger: {
        trigger: "#page10",
        start: "top 80%",
        end: "bottom 60%",
        scroller: "#main",
        scrub: 0.5,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".image-container", {
    scrollTrigger: {
        trigger: "#page10",
        start: "top 80%",
        end: "bottom 60%",
        scroller: "#main",
        scrub: 0.5,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out"
});

//end of page 10

// Scroll-triggered color change why travel with us
const page9 = document.getElementById('page9');
const headings = document.querySelectorAll('.left9 > h1, .left9 > h2');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      headings.forEach(heading => heading.classList.add('gold-text'));
    } else {
      headings.forEach(heading => heading.classList.remove('gold-text'));
    }
  });
}, { threshold: 0.5 });

// page 7

observer.observe(page9);

gsap.registerPlugin(ScrollTrigger);

// ... (rest of your existing script.js content) ...

function generateChecklist() {
  const destination = document.getElementById('destination').value;
  const tripType = document.getElementById('tripType').value;
  const duration = parseInt(document.getElementById('duration').value, 10);
  const packingListUl = document.getElementById('packingList');
  const tipsAreaDiv = document.getElementById('tipsArea');

  packingListUl.innerHTML = ''; // Clear previous list
  tipsAreaDiv.innerHTML = ''; // Clear previous tips

  let packingItems = [];
  let tips = [];

  // Basic packing items based on trip type (you can expand this)
  switch (tripType) {
    case 'beach':
      packingItems = ['Swimsuit', 'Sunscreen', 'Towel', 'Sunglasses', 'Hat', 'Sandals', 'Light clothing', 'Beach bag'];
      tips.push("Don't forget reef-safe sunscreen to protect marine life!");
      break;
    case 'city':
      packingItems = ['Comfortable walking shoes', 'Day bag', 'Camera', 'Adapter (if needed)', 'City map/guide', 'Reusable water bottle', 'Light jacket'];
      tips.push("Consider a universal adapter if you're traveling internationally.");
      break;
    case 'adventure':
      packingItems = ['Hiking boots', 'Backpack', 'Waterproof jacket', 'First-aid kit', 'Insect repellent', 'Headlamp/flashlight', 'Layers of clothing'];
      tips.push("Pack extra socks and break in your hiking boots before you go!");
      break;
    case 'business':
      packingItems = ['Formal wear', 'Laptop', 'Chargers', 'Business cards', 'Presentation materials', 'Notebook', 'Pen'];
      tips.push("Pack wrinkle-resistant clothing to stay sharp on the go.");
      break;
    case 'other':
      packingItems = ['Versatile clothing', 'Comfortable shoes', 'Basic toiletries', 'Travel documents', 'Phone and charger'];
      tips.push("Double-check your travel documents and make digital copies.");
      break;
    default:
      packingItems = ['Basic clothing', 'Toiletries', 'Phone charger', 'Travel documents'];
      break;
  }

  // Add duration-based items (example - adjust as needed)
  if (duration > 7) {
    packingItems.push('Laundry detergent sheets (travel size)');
  }

  // Add destination-based tips (example - can be expanded)
  if (destination.toLowerCase().includes('europe')) {
    tips.push("Europe typically uses Type C and Type F power outlets - consider an adapter.");
  }

  // Create checklist items in HTML
  packingItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    packingListUl.appendChild(li);
  });

  // Add tips to the tips area
  tips.forEach(tip => {
    const p = document.createElement('p');
    p.textContent = "Tip: " + tip;
    tipsAreaDiv.appendChild(p);
  });

  document.getElementById('checklistArea').style.display = 'block'; // Show checklist
}

function printChecklist() {
  window.print();
}
//end of page 7