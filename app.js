




//slider de opiniones

const slides = [
    {
        nombre: "Maximiliano Benitez",
        imagen: "asset/avatar-1.png",
        info: "Excelente todo,desde el trato,el precio y el servicio mis grandes entradas y yo, agradecemos este lugar"
    },


    {
        nombre: "lautaro gonzalez",
        imagen: "asset/avatar-2.png",
        info: "excelente atencion,super atentos,coordiales,sin dudar volveria a ir"
    },
     
    {
        nombre: "Agustin Zelarayan",
        imagen: "asset/avatar-4.png",
        info: "Muy bueno servicio,atención, muy  buena disposición de los barberos como su   amabilidad .No sé esperan para is   no va encontrar uno lugar mejor a ese..!!! "
    },
      
    {
        nombre: "Ailén Sabatini",
        imagen: "asset/avatar-3.png",
        info: "Fui varias veces a raparme y siempre me atendió Jhony el dueño.La verdade un capo. Super prolijo y detallista.Toda la onda el lugar y encima  no te  matan con el precio. 100% recomendado "
    },
      
];

const sliderContainer = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlideIndex = 0;
const totalSlides = slides.length;

const displaySlides = () => {
    if (sliderContainer && next && prevBtn) {
        sliderContainer.style.opacity = 0;
        setTimeout(() => {
            const { nombre, imagen, info} = slides
            [currentSlideIndex];

            sliderContainer.innerHTML =
                `<div class = "profile">
                <img src="${imagen}">
                <h3>${nombre}</h3>
             </div>
            
             <p>${info}</p>
             `;
            sliderContainer.style.opacity = 1;

            
        }, 300);
    }
};

nextBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) %
        totalSlides;
        displaySlides();
});

prevBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) %
        totalSlides;
    displaySlides();

});


    

window.onload = displaySlides;







