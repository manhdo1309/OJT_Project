let login = JSON.parse(localStorage.getItem("loginAdmin")) || [];
let users = JSON.parse(localStorage.getItem("admins")) || [];

if(login != ""){
    document.getElementById("logout").style.display = "none";
    for(let i = 0; i < users.length; i++){
        if(login === users[i].email){
            document.getElementById("render-after-login").innerHTML =
            `
                <li id="render-after-login">
                    <a href="/index.html">
                        <i class="fa-solid fa-house"></i>
                        <div>Trang chủ</div>
                    </a>
                    <a href="../pages/admin.html" onclick="logout(event)">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <div>Đăng xuất</div>
                    </a>
                </li>
            `
            document.getElementsByClassName("header-welcome")[0].innerHTML = 
            `
                <div class="header-welcome">
                    Xin chào ${users[i].name}
                </div>
            `;
            break;
        }
    }
}else{
    document.getElementById("logout").style.display = "block";
    document.getElementById("render-after-login").innerHTML = "";
}

function logout(event){
    localStorage.removeItem("loginAdmin");
    document.getElementById("logout").style.display = "block";
    document.getElementById("render-after-login").innerHTML = "";
}

let productTable = document.getElementsByClassName("admin-content-products")[0];

function openProductList(event){
    event.preventDefault();
    if(login != ""){
        productTable.style.display = "block";
    }else{
        window.location.href = "../pages/adminLogin.html";
    }
}

let products = [
    {
        id: 1,
        image: "../asset/images/vn-11134201-7r98o-lsjbid51upo256.jfif",
        name: "Giày thể thao nam Under Armour Machina 3",
        price: "2.867.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 2,
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmu-lpb1z9bqd2byb3",
        name: "Giầy Chạy Bộ Thể Thao Nam LINING ARST081",
        price: "1.054.700",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 3,
        image: "https://down-vn.img.susercontent.com/file/cecd353d5e744bcff3d196085a35e30b",
        name: "Gấu bông TOTORO mềm mịn béo tròn cao 40cm",
        price: "50.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 4,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llor0zdwacpr42",
        name: "Áo thun giữ nhiệt nam body đá bóng",
        price: "35.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 5,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmabmozk71en12",
        name: "Túi đeo chéo, túi đeo vai vải canvas Hàn Quốc",
        price: "39.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 6,
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-ln8h4j6fyhe3c2",
        name: "[chamer] Móc Khóa Thỏ Nhồi Bông Lông",
        price: "20.066",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 7,
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-jltze8h0g1jvf9",
        name: "MÓC KHOÁ 12 CHÒM SAO CUNG HOÀNG ĐẠO PHÁT QUANG",
        price: "18.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 8,
        image: "https://down-vn.img.susercontent.com/file/d9f3134daf60fbc18cce81f7b3546bab",
        name: "[TẶNG KÈM PIN] Đèn Ngủ Silicon Hình Mèo Cảm biến Đáng yêu",
        price: "25.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 9,
        image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lsjbfh3u3dated",
        name: "Giày thể thao nam Columbia Plateau™ Waterproof",
        price: "1.794.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 10,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh4i4p7w2khe56",
        name: "Nón Cói, Nói du lịch, Nón đi biển, Nón Cosplay nhân vật hoạt hình",
        price: "79.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 11,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll7oe3p8mv2gb3",
        name: "Móc Khoá Mô Hình Genshin Impact - dài 12cm",
        price: "21.000",
        stock: 999,
        date: "20/3/2024"
    },
    {
        id: 12,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljsb2py9zttg3d",
        name: "Lót chuột cỡ lớn lỗi nhẹ, in lỗi chuyên game siêu bền đẹp",
        price: "20.066",
        stock: 999,
        date: "20/3/2024"
    },
]

localStorage.setItem("products", JSON.stringify(products));

let productInfo = document.getElementsByClassName("products-contents-table-body")[0];
function renderProduct(){
    let text = "";
    for(let i = 0; i < products.length; i++){
        text +=
        `
        <tbody class="products-contents-table-body">
            <td class="body-item">${products[i].id}</td>
            <td class="body-item"><img src="${products[i].image}" alt=""></td>
            <td class="body-item">${products[i].name}</td>
            <td class="body-item">${products[i].stock}</td>
            <td class="body-item">${products[i].date}</td>
            <td class="body-item"><button>Sửa</button></td>
            <td class="body-item"><button>Xóa</button></td>
        </tbody>
        `
    }
    productInfo.innerHTML = text;
}
renderProduct();

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();

let today = day + '/' + month+ '/'+ year;


let addForm = document.getElementsByClassName("products-add-form")[0];
function openAddProduct(event){
    event.preventDefault();
    if(addForm.style.display == "none"){
        addForm.style.display = "block";
    }else{
        addForm.style.display = "none";
    }
}
let addId = products.length;
function addProduct(event){
    event.preventDefault();
    let newName = document.getElementById("productName").value;
    let newImage = document.getElementById("productImage").value;
    let newId = addId + 1;
    let newPrice = document.getElementById("productPrice").value;
    let newQuantity = document.getElementById("productQuantity").value;
    let newCreate = today;
    let newProduct = {
        id: newId,
        name: newName,
        image: newImage,
        price: newPrice,
        stock: newQuantity,
        date: newCreate,
    }
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    renderProduct();
}
