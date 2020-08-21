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
import abstractFlowers from "../../dist/images/abstract-flowers.jpg";


export const images = [
  {
    src: doggo,
    title: "Dreamy Doggo",
    description: "Sam the doggo dreaming away. My first attempt at painting a pet. Sam was the first fur baby in the family, he went over to the other side of the rainbow the week after I finished this painting. Feels like he is living on through the painting. ",
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
    description: "Based on the beautiful log cabins I saw in the woods at the Smokies National Park",
    medium: "oil on canvas 16X20"
  },
  {
    src: youngMAn,
    title: "Young Man",
    description: "reimagined from a small black and white photo, the only good picture my husband has from his childhood",
    medium: "oil on canvas 18X24"
  },
  {
    src: marigoldField,
    title: "Marigold Field",
    description: "Marigolds field with bluebonnets .. inspired by a pic I took at Butchart Gardens in 2015",
    medium: "acrylic on canvas 16X20"
  },
  {
    src: mil,
    title: "Portrait Of A Mother",
    description: "portrait of my mother-in-law, a wonderful lady,  unfortunately she passed away a few years ago, way too soon ..",
    medium: "oil on canvas 18X24"
  },
  {
    src: indianBridgeGroom,
    title: "60's Indian Bride & Groom",
    description: "My parents do not have any pics from their wedding, my mom always wished she had at least one .. now she does :-) used a pic I have of my parents from when they were younger, and imagined this wedding pic ..",
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
    description: "This is my second oil painting and my first attempt at a portrait .. from a pic of my kids when they were younger, five years old big brother with his six months old little sister",
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
    description: "This is the painting that got it all strated, the first serious painting I did. It is inspired by a pic I took at the Butchart Gardens, Canada. I thoroughly enjoyed working on it .. finished it in one sitting of four hours",
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
    title: "Girls playing at the fountain",
    description: "kids can meet for the first time ..  smile at each other, and start playing just like that .. done in shades of blue, green, brown and white. ",
    medium: "oil on canvas 16X16"
  },
  {
    src: dolly,
    title: "Dolly",
    description: "A friends cute little fur baby",
    medium: "oil on canvas 16X16"
  },
  {
    src: greenLake,
    title: "Green Lake",
    description: "",
    medium: "acrylic on canvas 16X20"
  },
  {
    src: abstractFlowers,
    title: "Abstract Flowers",
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
