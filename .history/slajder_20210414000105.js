class Slider {
  constructor(elemSelector) {
      this.currentSlide = 0; //aktualny slide
      this.sliderSelector = elemSelector; //selektor elementu który zamienimy na slider
      this.elem = null; //tutaj pobierzemy element który zamienimy na slider
      this.slider = null; //tutaj wygenerujemy slider
      this.slides = null; //tutaj pobierzemy slajdy
      this.prev = null; //przycisk prev
      this.next = null; //przycisk next
      this.dots = []; //przyciski kropek
      
  }

  generateSlider() {
    //pobieramy element który zamienimy na slider
    this.slider = document.querySelector(this.sliderSelector);
    this.slider.classList.add("slider");

    //tworzymy kontener dla slajdów
    const slidesCnt = document.createElement("div");
    slidesCnt.classList.add("slider-slides-cnt");

    //pobieramy element slajdów
    this.slides = this.slider.children;

    //to jest żywa kolekcja, więc przy przeniesieniu każdego slajda
    //jej długość maleje
    while (this.slides.length) {
        this.slides[0].classList.add("slider-slide");
        //jeżeli element appendujemy do innego elementu
        //to tak jakbyśmy go usuwali z tej kolekcji
        //bo jeden element nie może być równocześnie w 2 miejscach
        slidesCnt.append(this.slides[0]);
    }

    //musimy na nowo pobrać slajdy, bo powyższa kolekcja jest już pusta
    this.slides = slidesCnt.querySelectorAll(".slider-slide");

    //wygenerowaliśmy kontener ze slajdami, wstawiamy go więc do slidera
    this.slider.append(slidesCnt);
}


}


