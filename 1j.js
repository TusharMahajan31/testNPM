const register= async()=>
{
  const usernameRef = document.querySelector("#username");
  const passwordRef = document.querySelector("#password");
  const emailRef = document.querySelector("#email");
  const mobileRef = document.querySelector("#mobile");
  const cityRef = document.querySelector("#city");
 
  const user = {
    username: usernameRef.value,
    password: passwordRef.value,
    email: emailRef.value,
    mobile: mobileRef.value,
    city:cityRef.value,
  };
  console.log(user);
  const url = "http://localhost:3000/user1";
  const res = await axios.post(url, user);
  console.log(res);

  usernameRef.value = "";
  passwordRef.value = "";
  emailRef.value = "";
  mobileRef.value = "";
  cityRef.value = "";
};
async function getAllUser() {
  const url = "http://localhost:3000/user1";
  const res = await axios.get(url);
  console.log(res);

  for (let item of res.data) {
    let outputRef = document.querySelector("#output");

    let newElement = `<div class="col-12 d-flex justify-content-center h6">${item.username} | ${item.password} | ${item.email} | ${item.mobile}|${item.city}</div>`;

    outputRef.innerHTML = newElement + outputRef.innerHTML;
  }
}
