const recBtn = document.getElementById("rec-btn");

const handleDataUser = () => {
  const systemName = document.getElementById("nameDropDown");
  const systemPurpose = document.getElementById("purposeDropDown");
  const systemRam = document.getElementById("ramDropDown");
  const systemMemory = document.getElementById("memoryDropDown");
  const systemType = document.getElementById("typeDropDown");
  const systemGraphics = document.getElementById("graphicsDropDown");
  const systemSpeed = document.getElementById("speedDropDown");
  const systemBudget = document.getElementById("budgetDropDown");
  const systemValue = systemName.value;
  const purposetValue = systemPurpose.value;
  const ramValue = systemRam.value;
  const memorytValue = systemMemory.value;
  const typeValue = systemType.value;
  const graphicsValue = systemGraphics.value;
  const speedtValue = systemSpeed.value;
  const budgetValue = systemBudget.value;

  window.location.href = "/result.html";
  localStorage.setItem("name", systemValue);
  localStorage.setItem("budgetDropDown", budgetValue);
  localStorage.setItem("ramDropDown", ramValue);
  localStorage.setItem("memoryDropDown", memorytValue);
  localStorage.setItem("graphicsDropDown", graphicsValue);
  localStorage.setItem("speedDropDown", speedtValue);
  localStorage.setItem("purposeDropDown", purposetValue);
  localStorage.setItem("typeDropDown", typeValue);
  // console.log(
  //   "hi",
  //   systemValue,
  //   purposetValue,
  //   ramValue,
  //   memorytValue,
  //   typeValue,
  //   graphicsValue,
  //   speedtValue,
  //   budgetValue
  // );
};

recBtn.addEventListener("click", handleDataUser);
