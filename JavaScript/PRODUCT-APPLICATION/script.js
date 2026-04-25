async function handlePromise() {
    try{
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json();

        let container = document.getElementById("container");
        data.forEach((user) => {
            let div = document.createElement("div");

            div.style.border = "2px solid black";
            div.style.margin = "5px";
            div.style.padding = "10px";
            div.style.borderRadius = "15px";

            div.innerHTML = `
                <p><b>Image:</b></p>
                    <img src="${user.image}" style="width:100px; border-radius:10px;  " />

                
                <p><b>Category:</b> ${user.category}</p>
                <p><b>Price:</b> ${user.price}</p>
                <p><b>Rating:</b> ${user.rating.rate}</p>

                <button class="buy-btn">Buy Now</button>
            `;

            container.appendChild(div);
        });
    }catch(error){
        console.log(error);
    }
}
handlePromise();