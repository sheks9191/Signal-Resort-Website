
//.........................................................

const chevron = document.querySelector('.chevron')
const navB = document.querySelector('.navB-container')

chevron.addEventListener('click', () => {
    navB.classList.toggle('active')
    chevron.classList.toggle('active')
})
//.................Mobile Nav................................................

const menuBar = document.querySelector('.menu-bar')
const mobileNav = document.querySelector('.mobile-nav')

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active')
    mobileNav.classList.toggle('active')
})

const header = document.getElementById('header')

window.addEventListener('scroll', navBar);

function navBar() {
     if(window.scrollY > header.offsetHeight) {
         navB.classList.add('fixed')
     } else {
        navB.classList.remove('fixed')
     }
}
//..............Smooth Scroll...........................................................
const scrolls = document.querySelectorAll('.scroll')

scrolls.forEach(scroll => {
    scroll.addEventListener('click', (e) => {
         e.preventDefault()
         const link = e.target.getAttribute('href').slice(1)
         const element = document.getElementById(link);
         let position = element.offsetTop;
         window.scrollTo ({
             left:0,
             top: position,
         })

         menuBar.classList.remove('active')
         mobileNav.classList.remove('active')
    })
})
//........................................................................................
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText  
    .split('')
    .map((letter,idx) => `<span style="transition-delay:${idx * 45}ms">${letter}</span>`)
    .join('')
})

//...........................Rooms and Galleries.............................................................
const contents = document.querySelectorAll('.content')

contents.forEach(content => {
    content.addEventListener('mouseenter', () => {
          content.classList.add('active')
    })

    content.addEventListener('mouseleave', () => {
        content.classList.remove('active')
  })
})




const galleries = [

    {
        photo: "./images/beach-2.jpg",
        title: "Happiness & Fun"
    },


    {
          photo: "./images/massage and spa.jpg",
          title: "Massage & Spa"
    },

    
    {
        photo: "./images/bar and drinks 1.jpg",
        title: "Bar & Drinks"
    },


    {
        photo: "./images/beach-1.jpg",
        title: " Outdoor Relaxation"
    },

    
    {
        photo: "./images/bar and drinks 2.jpg",
        title: "Bar & Drinks"
    },

    
    {
        photo: "./images/food-1.jpg",
        title: "Foreign Cuisine"
    },


    
    {
        photo: "./images/food-2.jpg",
        title: "Foreign Cuisine"
    },
     
    {
        photo: "./images/gym.jpg",
        title: "GYM Facilities"
    },

    {
        photo: "./images/beach-3.jpg",
        title:"Team Bonding"
    },

    {
        photo: "./images/beach-6.jpg",
        title: "Beach Soccer"
    },

    {
        photo: "./images/foody3.png",
        title: "Local Cuisine"
    },

    
    {
        photo: "./images/food-3.jpg",
        title: "Foreign Cuisine"
    },

    
    {
        photo: "./images/food-4.jpg",
        title: "Foreign Cuisine"
    },

    {
        photo: "./images/beach-4.jpg",
        title: "Fun Fun Fun"
    },

    {
        photo: "./images/beach-5.jpg",
        title: "Make New Friends"
    }
] 

const galleryImage = document.querySelector('.gallery-image')
const galleryTitle = document.querySelector('.gallery-title')

let gallery = 1

function galleryUpdate() {
     const {photo, title } = galleries[gallery]
     galleryImage.src = photo
     galleryTitle.innerText = title

     gallery++

     if(gallery === galleries.length - 1) {
         gallery = 0
     }
}

setInterval(galleryUpdate, 5000)

//....................................................................

const heroBackground = document.querySelector('.hero-background')

const backgroundImages = [
    {
        image: "./images/image20.jpg"
    },

    {
        image: "./images/image21.jpg"
    },

    {
        image: "./images/image22.jpg"
    },

    {
        image: "./images/image19.jpg"
    },

    {
        image: "./images/image23.jpg"
    }

]

let img = 0;

function backgroundUpdate() {
    const {image} = backgroundImages[img]
    heroBackground.style.backgroundImage = `url(${image})`;
    

    img++

    if(img === backgroundImages.length - 1) {
        img = 0
    }
}

setInterval(backgroundUpdate, 5000)




