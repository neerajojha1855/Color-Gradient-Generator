const gradient_box = document.querySelector(".gradient-box");
const select_menu = document.querySelector(".select-box select");
const color_inputs = document.querySelectorAll(".colors input");
const text_area = document.querySelector("textarea");
const refresh_btn = document.querySelector(".refresh");
const copy_btn = document.querySelector(".copy");

const get_random_color = () => {
    const random_hex = Math.floor(Math.random()*0xffffff).toString(16);
    return `#${random_hex}`;
}


const generate_gradient = (isRandom) => {
    if(isRandom) {
        color_inputs[0].value = get_random_color();
        color_inputs[1].value = get_random_color();
    }
    const gradient = `linear-gradient(${select_menu.value}, ${color_inputs[0].value}, ${color_inputs[1].value})`;
    gradient_box.style.background = gradient;
    text_area.value = `background: ${gradient};`;
};

const copy_hex_code = () => {
    navigator.clipboard.writeText(text_area.value);
    copy_btn.innerText = "Code Copied ✅";
    setTimeout(() => copy_btn.innerText = "Copy Hex Code", 1600);
}

color_inputs.forEach(input => {
    input.addEventListener("input", () => generate_gradient(false));
});

select_menu.addEventListener("change", () => generate_gradient(false));
refresh_btn.addEventListener('click', () => generate_gradient(true))
copy_btn.addEventListener("click", copy_hex_code);