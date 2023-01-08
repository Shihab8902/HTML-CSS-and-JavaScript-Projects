//fetching data
const fetchData = async (config)=>{
    try{
        let res = await axios(config);
        return res.data;
    }
    catch(error){
        throw Error("Unable to fetch data");
    }
}

//element selection
let cards = document.querySelector(".cards");





// creating card element
const loadAllData = async ()=>{
    let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3 class="post-title">${post.title}</h3>
                            <p class="post-desc">${post.body}</p>`;
                            cards.appendChild(card);
    })

   
}


loadAllData();