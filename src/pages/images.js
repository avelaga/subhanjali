import img1 from "../../dist/images/doggo.jpg";
import img2 from "../../dist/images/cyclist.jpg";
import img3 from "../../dist/images/dancer.jpg";
import img4 from "../../dist/images/guitarist.jpg";
import img5 from "../../dist/images/beach.jpg";
import img6 from "../../dist/images/log-cabin.jpg";
import img7 from "../../dist/images/young-man.jpg";
import img8 from "../../dist/images/marigold-field.jpg";
import img9 from "../../dist/images/mil.jpg";
import img10 from "../../dist/images/big-brother.jpg";
import img11 from "../../dist/images/chess.jpg";
import img12 from "../../dist/images/dusk.jpg";
import img13 from "../../dist/images/lord-krishna.jpg";
import img14 from "../../dist/images/indian-bride&groom.jpg";
import img15 from "../../dist/images/portrait-blue.jpg";
import img16 from "../../dist/images/water-lily.jpg";
import img17 from "../../dist/images/yosemite.jpg";
import img18 from "../../dist/images/park.jpg";
import img19 from "../../dist/images/dolly.jpg";
import img20 from "../../dist/images/green-lake.jpg";


export const images = [
  {
    src: img1,
    title: "Dreamy Doggo",
    description: "Sam the doggo dreaming away",
    medium: "oil on canvas 18X24"
  },
  {
    src: img2,
    title: "The Morning Cyclist",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: img3,
    title: "Kuchipudi Dancer",
    description: "",
    medium: "oil on canvas 24X30"
  },
  {
    src: img4,
    title: "The Guitarist",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: img5,
    title: "Cousins At The Beach",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: img6,
    title: "Log Cabin",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: img7,
    title: "Young Man",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: img8,
    title: "Marigold Field",
    description: "",
    medium: "acrylic on canvas 16X20"
  },
  {
    src: img9,
    title: "Mother In Law",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: img10,
    title: "Big Brother",
    description: "",
    medium: "oil on canvas 24X30"
  },
  {
    src: img11,
    title: "Chess",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: img12,
    title: "Dusk",
    description: "",
    medium: "oil on canvas 24X30"
  },
  {
    src: img13,
    title: "Lord Krishna",
    description: "",
    medium: "acrylic on canvas 24X30"
  },
  {
    src: img14,
    title: "Indian Bride & Groom",
    description: "",
    medium: "oil on canvas 24X30"
  },
  // {
  //   src: img15,
  //   title: "Portrait couple",
  //   description: "",
  //   medium: "oil on canvas 16X16"
  // },
  {
    src: img16,
    title: "Lotus Bloom",
    description: "",
    medium: "acrylic on canvas 16X20"
  },
  {
    src: img17,
    title: "Kids At Yosemite",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: img18,
    title: "Girls In The Park",
    description: "done in shades of blue, green, brown and white",
    medium: "oil on canvas 16X16"
  },
  {
    src: img19,
    title: "Dolly",
    description: "",
    medium: "oil on canvas 16X16"
  },
  {
    src: img20,
    title: "Green Lake",
    description: "",
    medium: "acrylic on canvas 16X20"
  },
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
