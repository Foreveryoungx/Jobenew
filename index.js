// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

// array of pictures for gallery
const dogPictures = [
  {
    url:"https://github.com/sevensage/Jobenew/blob/master/Pictures/abra1.jpg?raw=true",
    title: "Abra"
  },
  {
    url:""
  }

  //examples
  },
  {
    url:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "happy little jump boi"
  },
  {
    url:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "runnin with the dogs"
  }
];

// populating gallery with pictures
const gallerySection = document.querySelector("#gallery");
dogPictures.forEach(pic => {
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallerySection.appendChild(img);
});

// handle form submission
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});