const sysName = document.getElementById("sys-name");
const sysRam = document.getElementById("sys-ram");
const sysImg = document.getElementById("result-img");
const sysPro = document.getElementById("sys-pro");
const sysSpeed = document.getElementById("sys-speed");
const sysGraphics = document.getElementById("sys-graphics");
const sysMemory = document.getElementById("sys-memory");
const sysPrize = document.getElementById("sys-prize");
const err = document.getElementById("err");
const con = document.getElementById("con");

const systems = [
  {
    name: "Hp Elitebook 840 G5",
    graphisType: "AMD",
    type: "Hp",
    ram: "4GB",
    proccessor: "AMD",
    memory: "500GB HDD",
    budget: "100k-200k",
    proccessorSpeed: "3.0-4.0 GHz",
    img: "./hp-1.png",
    graphicsCard: "Intel",
    purpose: ["Others"],
    prize: "N120,000",
  },
  {
    name: "Hp elite dragonfly G3 Intelcore i7",
    graphisType: "AMD",
    type: "Hp",
    ram: "16GB",
    proccessor: "Intel",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "200k-300k",
    purpose: ["Gaming", "Others"],
    memory: "1TB HDD",
    img: "./hp-2.png",
    graphicsCard: "Intel",
    prize: "N200, 000",
  },
  {
    name: "Hp spectre x360 Core i7",
    graphisType: "AMD",
    type: "Hp",
    ram: "16GB",
    proccessor: "Nvidia",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "200k-300k",
    purpose: ["Gaming", "Coding", "Design", "Others"],
    img: "./hp-3.png",
    graphicsCard: "Intel",
    memory: "1TB SSD",
    prize: "N300, 000",
  },
  {
    name: "Hp victus 16 Core i7",
    graphisType: "AMD",
    type: "Hp",
    ram: "8GB",
    proccessor: "Intel",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "200k-300k",
    purpose: ["Gaming"],
    graphicsCard: "Nvidia",
    memory: "500GB SSD",
    img: "./hp-4.png",
    prize: "N200, 000",
  },
  {
    name: "Hp Zbook fury 16 G9 Core i9",
    graphisType: "AMD",
    type: "Hp",
    proccessor: "AMD",
    proccessorSpeed: "3.0-4.0 GHz",
    budget: "300k-400k",
    memory: "1TB SSD",
    ram: "32GB",
    purpose: ["Gaming", "Coding", "Design"],
    prize: "N400, 000",

    img: "./hp-5.jpg",
    graphicsCard: "Nvidia",
  },
  {
    name: "Hp Dragonfly pro Chromebook Core i5",
    graphisType: "AMD",
    type: "Hp",
    proccessor: "Intel",
    proccessorSpeed: "2.0-3.0 GHz",
    memory: "500GB SSD",
    budget: "200k-300k",
    ram: "16GB",
    purpose: ["Gaming", "Design", "Coding", "Others"],
    img: "./hp-1.png",
    graphicsCard: "Intel",
    prize: "N200,400",
  },
  {
    name: "Acer predator triton 500SE Core i9",
    graphisType: "AMD",
    type: "Acer",
    proccessor: "Intel",
    proccessorSpeed: "3.0-4.0 GHz",
    budget: "300k-400k",
    ram: "32GB",
    purpose: ["Gaming", "Coding", "Design", "Others"],
    memory: "500GB SSD",
    img: "./acer-2.png",
    graphicsCard: "Intel",
    prize: "N400,000",
  },
  {
    name: "Acer spin 5 Core i7",
    graphisType: "AMD",
    type: "Acer",
    ram: "16gb",
    proccessor: "AMD",
    proccessorSpeed: "3.0-4.0 GHz",
    budget: "300k-400k",
    purpose: ["Gaming", "Coding", "Design", "Others"],
    memory: "1TB SSD",
    prize: "N400,000",
    img: "./acer-1.png",
    graphicsCard: "AMD",
  },
  {
    name: "Acer Chromebook C933T",
    graphisType: "AMD",
    type: "Acer",
    ram: "16GB",
    proccessor: "AMD",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "300k-400k",
    purpose: ["Gaming", "Coding", "Design", "Others"],
    memory: "1TB SSD",
    prize: "N400,000",

    img: "./acer-3.png",
    graphicsCard: "AMD",
  },
  {
    name: "Dell xps 13 plus Core i7",
    graphisType: "AMD",
    type: "Dell",
    memory: "500GB SSD",
    ram: "16GB",
    proccessor: "Intel",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "300k-400k",
    purpose: ["Others", "Coding", "Design", "Gaming"],
    img: "./dell-1.png",
    graphicsCard: "Intel",
    prize: "N300,000",
  },
  {
    name: "Dell latitude 9430 Core i7",
    memory: "500GB SSD",
    graphisType: "AMD",
    type: "Dell",
    ram: "16GB",
    proccessor: "AMD",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "300k-400k",
    purpose: ["Coding", "Gaming", "Design", "Others"],
    img: "./dell-2.png",
    graphicsCard: "Intel",
    prize: "N400,000",
  },
  {
    name: "Macbook Air m2",
    graphisType: "Apple",
    proccessor: "Apple",
    ram: "16GB",
    memory: "1TB SSD",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "300k-400k",
    purpose: ["Coding", "Gaming", "Design", "Others"],
    img: "./mac-1.jpg",
    type: "Apple",
    graphicsCard: "Apple",
    prize: "N300,000",
  },
  {
    name: "Apple MacBook air 15 inch",
    graphisType: "Apple",
    proccessor: "Apple",
    ram: "32GB",
    memory: "1TB SSD",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "300k-400k",
    purpose: ["Coding", "Gaming", "Design", "Others"],
    img: "./mac-2.png",
    graphicsCard: "Apple",
    prize: "N300,000",
    type: "Apple",
  },
  {
    name: "Apple MacBook pro 14 inch",
    prize: "N400,000",
    graphisType: "Apple",
    proccessor: "Apple",
    memory: "500GB SSD",
    ram: "16GB",
    proccessorSpeed: "2.0-3.0 GHz",
    budget: "300k-400k",
    purpose: ["Coding", "Gaming", "Design", "Others"],
    img: "./mac-3.jpg",
    graphicsCard: "Apple",
    type: "Apple",
  },
];

const handleResult = () => {
  const name = localStorage.getItem("name");
  const budget = localStorage.getItem("budgetDropDown");
  const ram = localStorage.getItem("ramDropDown");
  const proccessorSpeed = localStorage.getItem("speedDropDown");
  const purpose = localStorage.getItem("purposeDropDown");
  const graphicsCard = localStorage.getItem("graphicsDropDown");
  // const proccessor = localStorage.getItem("proccessor");
  const type = localStorage.getItem("typeDropDown");
  const memory = localStorage.getItem("memoryDropDown");

  const systemResult = systems.find(
    (item) =>
      item.type === name &&
      item.budget === budget &&
      item.ram === ram &&
      // item[0].purpose === purpose || item[1] == &&
      item.proccessorSpeed === proccessorSpeed &&
      item.memory === memory &&
      item.graphicsCard === graphicsCard &&
      item.proccessor === type
  );

  if (systemResult) {
    sysName.innerText = systemResult.name;
    sysRam.innerText = systemResult.ram;
    sysPro.innerText = systemResult.proccessor;
    sysSpeed.innerText = systemResult.proccessorSpeed;
    sysGraphics.innerText = systemResult.graphicsCard;
    sysMemory.innerText = systemResult.memory;
    sysPrize.innerText = systemResult.prize;
    sysImg.src = systemResult.img;

    err.style.display = "none";

    // console.log(systemResult, proccessorSpeed, "lllll");

    // console.log(
    //   systems.filter((item) => item.proccessorSpeed === "2.0-3.0 GHz"),
    //   "speed"
    // );
  } else {
    err.innerText = "No System Found!";
    con.style.display = "none";
    // console.log(
    //   systems.filter(
    //     (item) =>
    //       item.type === name &&
    //       item.budget === budget &&
    //       item.ram === ram &&
    //       // item[0].purpose === purpose || item[1] == &&
    //       item.proccessorSpeed === proccessorSpeed &&
    //       // item.memory === memory
    //       item.graphicsCard === graphicsCard
    //     // item.proccessor === type
    //   ),
    //   "speed"
    // );
    // console.log(systemResult, "rsult");
  }
};

handleResult();
