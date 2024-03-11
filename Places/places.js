const main = document.getElementById("main");

const getData = async () => {
    const response = await fetch('https://klympikul.github.io/API/data.json');
    const data = await response.json();

    data.forEach(item => {
        const { title, image, description, link } = item;

        const card = document.createElement("div");
        const placesTitle = document.createElement("h2");
        const placesImage = document.createElement("img");
        const placesDescription = document.createElement("p");
        const placesLink = document.createElement("a");

        card.className = "card";

        placesTitle.textContent = title;
        placesImage.src = image;
        placesDescription.textContent = description;
        placesLink.textContent = "More info";
        placesLink.href = link;

        main.appendChild(card);
        card.append(placesTitle, placesImage, placesDescription, placesLink);
    });
}

getData();
