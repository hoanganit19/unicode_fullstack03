const checkboxDeleteList = document.querySelectorAll(".checkbox-delete");
const idDeleteInput = document.querySelector(".id-delete");
if (checkboxDeleteList && idDeleteInput) {
    let ids = [];
    checkboxDeleteList.forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const status = e.target.checked;
            const id = +e.target.value;
            if (status) {
                !ids.includes(id) && ids.push(id);
            } else {
                ids = ids.filter((item) => item !== id);
            }
            idDeleteInput.value = ids.join(",");
        });
    });
}
