import img1 from "../../dist/images/doggo.jpg";
import img2 from "../../dist/images/cyclist.jpg";
import img3 from "../../dist/images/dancer.jpg";
import img4 from "../../dist/images/guitarist.jpg";
import img5 from "../../dist/images/beach.jpg";
// import img6 from "../../dist/images/dolly.jpg";

export const images = [
  {
    src: img1,
    title: "Dreamy doggo",
    description: "Sam the doggo dreaming away",
    medium: "oil on canvas 18X24"
  },
  {
    src: img2,
    title: "The morning cyclist",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: img3,
    title: "Kuchipudi dancer",
    description: "",
    medium: "oil on canvas 24X30"
  },
  {
    src: img4,
    title: "The guitarist",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: img5,
    title: "Cousins at the beach",
    description: "",
    medium: "oil on canvas 18X24"
  },
  // {
  //   src: img6,
  //   title: "Dolly",
  //   description: "",
  //   medium: "oil on canvas 16X16"
  // }
];

export function getWidth(image) {
  var img = new Image();
  img.onload = function () {
    return this.width;
  }
  img.src = image;
}

export function getHeight(image) {
  var img = new Image();
  img.onload = function () {
    return this.height;
  }
  img.src = image;
}