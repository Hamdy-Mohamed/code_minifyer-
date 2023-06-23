(function minify() {
  let code_input = document.querySelector(".code_input");
  let btn = document.querySelector(".btn");
  btn.onclick = () => {
    let input_value = code_input.value;
    let result = input_value.replace(/\s+/g, " ");
    code_input.value = result;
  };

  code_input.addEventListener("click", () => {
    code_input.style.transition = "0.4s";
    code_input.style.height = "7rem";
    code_input.style.width = "32rem";
    code_input.style.borderRadius = "1.1rem";
  });

  let facebook_icon = document.querySelector("#facebook");
  let github_icon = document.querySelector("#github");
  let linkedin_icon = document.querySelector("#linkedin");
  let insta_icon = document.querySelector("#insta");
  facebook_icon.onclick = () => {
    window.open("https://www.facebook.com/hamdy.elgokar.5");
  };
  github_icon.onclick = () => {
    window.open("https://github.com/Hamdy-Mohamed");
  };
  linkedin_icon.onclick = () => {
    window.open("https://www.linkedin.com/in/hamdy-abdal-majeed-b67b32246/");
  };
  insta_icon.onclick = () => {
    window.open("https://www.instagram.com/askander_19/");
  };
})();
