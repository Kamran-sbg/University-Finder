let btn = document.querySelector("#btnh");
let p = document.querySelector("#result");
let uni = "http://universities.hipolabs.com/search?name=";
btn.addEventListener("click", async () => {
  let inp = document.querySelector("#inph").value;
  let clgarr = await getUniName(inp);
  show(clgarr);
});
function show(clgarr) {
  p.innerText = "";
  for (clg of clgarr) {
    console.log(clg.web_pages);
    let li = document.createElement("li");
    let h3 = document.createElement("p");
    let h2 = document.querySelector("h2");
    li.innerText = clg.name;
    h2.innerText = clg.country;
    h3.style.color = "blue";
    h3.innerText = clg.web_pages;
    p.append(li, h3);
  }
}

async function getUniName(inp) {
  try {
    let res = await axios.get(uni + inp);
    let data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}
