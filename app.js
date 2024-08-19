let btn = document.querySelector("#btnh");

let p = document.querySelector("#result");

let uni = "http://universities.hipolabs.com/search?name=";
let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
let div = document.querySelector("#dh3");

btn.addEventListener("click", async () => {
  let inp = document.querySelector("#inph").value;

  let clgarr = await getUniName(inp);
  console.log(clgarr);
  show(clgarr);
});
function show(clgarr) {
  p.innerText = "";
  div.innerText = "";
  for (clg of clgarr) {
    console.log(clg.web_pages);
    let li = document.createElement("li");
    let h3 = document.createElement("p");

    li.innerText = clg.name;
    h2.innerText = clg.country;
    h3.style.color = "blue";
    h3.innerText = clg.web_pages;
    // div.append(h3);
    p.append(li, h3);
  }
}

async function getUniName(inp) {
  try {
    let res = await axios.get(uni + inp);
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
