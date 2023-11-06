let searchElement = document.getElementById("searchInput");
let searchresults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function creatAppend(result) {
    spinner.classList.toggle("d-none");
    for (let i of result) {
      
        let container = document.createElement("div");
        let title = document.createElement("a");
        let link = document.createElement("a");
        let description = document.createElement("p");
        container.classList.add("result-item");
        title.href = i.title;
        title.style.display = "block";
        title.textContent = i.title;
        title.classList.add("result-title");
        link.href = i.link;
        link.style.display="block";
        link.textContent = i.link;
        link.classList.add("result-url");
        description.textContent = i.description;
        description.classList.add("link-description");
        container.appendChild(title);
        container.appendChild(link);
        container.appendChild(description);
        searchresults.appendChild(container);
    }
}

searchElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchresults.textContent = "";
        spinner.classList.toggle("d-none");
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchElement.value;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                creatAppend(data.search_results);
            });
    }
});