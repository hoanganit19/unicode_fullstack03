const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

export default function getMessage() {
  console.log("Hello Hoàng An");
}

const getProducts = () => {
  return ["Prod 1", "Prod 2"];
};

//Export Default -> Chỉ có 1 default trong 1 file
// export default getMessage;
/*
Có thể viết trực tiếp từ khóa export default trên hàm và class
*/

//Export Named -> Có thể có nhiều
export { user, getProducts };
