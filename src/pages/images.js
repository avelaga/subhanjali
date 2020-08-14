import doggo from "../../dist/images/doggo.jpg";
import cyclist from "../../dist/images/cyclist.jpg";
import dancer from "../../dist/images/dancer.jpg";
import guitarist from "../../dist/images/guitarist.jpg";
import beach from "../../dist/images/beach.jpg";
import logCabin from "../../dist/images/log-cabin.jpg";
import youngMAn from "../../dist/images/young-man.jpg";
import marigoldField from "../../dist/images/marigold-field.jpg";
import mil from "../../dist/images/mil.jpg";
import bigBrother from "../../dist/images/big-brother.jpg";
import chess from "../../dist/images/chess.jpg";
import dusk from "../../dist/images/dusk.jpg";
import lordKrishna from "../../dist/images/lord-krishna.jpg";
import indianBridgeGroom from "../../dist/images/indian-bride&groom.jpg";
import portraitBlue from "../../dist/images/portrait-blue.jpg";
import waterLily from "../../dist/images/water-lily.jpg";
import yosemite from "../../dist/images/yosemite.jpg";
import park from "../../dist/images/park.jpg";
import dolly from "../../dist/images/dolly.jpg";
import greenLake from "../../dist/images/green-lake.jpg";


export const images = [
  {
    src: doggo,
    title: "Dreamy Doggo",
    description: "Sam the doggo dreaming away",
    medium: "oil on canvas 18X24"
  },
  {
    src: cyclist,
    title: "The Morning Cyclist",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: dancer,
    title: "Kuchipudi Dancer",
    description: "",
    medium: "oil on canvas 24X30"
  },
  {
    src: guitarist,
    title: "The Guitarist",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: beach,
    title: "Cousins At The Beach",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: logCabin,
    title: "Log Cabin",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: youngMAn,
    title: "Young Man",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: marigoldField,
    title: "Marigold Field",
    description: "",
    medium: "acrylic on canvas 16X20"
  },
  {
    src: mil,
    title: "Portrait Of A Mother",
    description: "",
    medium: "oil on canvas 18X24"
  },
  {
    src: indianBridgeGroom,
    title: "60's Indian Bride & Groom",
    description: "",
    medium: "oil on canvas 24X30"
  },
  {
    src: chess,
    title: "Chess",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: dusk,
    title: "Dusk",
    description: "",
    medium: "oil on canvas 24X30"
  },
  {
    src: lordKrishna,
    title: "Krishna With Flute",
    description: "",
    medium: "acrylic on canvas 24X30"
  },
  {
    src: bigBrother,
    title: "Big Brother",
    description: "",
    medium: "oil on canvas 24X30"
  },
  // {
  //   src: portraitBlue,
  //   title: "Portrait couple",
  //   description: "",
  //   medium: "oil on canvas 16X16"
  // },
  {
    src: waterLily,
    title: "Lotus Bloom",
    description: "",
    medium: "acrylic on canvas 16X20"
  },
  {
    src: yosemite,
    title: "Kids At Yosemite",
    description: "",
    medium: "oil on canvas 16X20"
  },
  {
    src: park,
    title: "Girls In The Park",
    description: "done in shades of blue, green, brown and white",
    medium: "oil on canvas 16X16"
  },
  {
    src: dolly,
    title: "Dolly",
    description: "",
    medium: "oil on canvas 16X16"
  },
  {
    src: greenLake,
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
