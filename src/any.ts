// any = membuat type data object dapat menyimpan beragam type data
const personalData: any = {
  name: "Danang",
  age: 19,
  job: "cloud engineer",
};

personalData.job = "Devops";

console.info(personalData.job);
