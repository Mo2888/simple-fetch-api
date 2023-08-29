
let container = document.querySelector(".posts-container");


// fetching 100 post

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {

    //loop through all posts
    posts.forEach(post => {
      //create the post

      let div = document.createElement("div");
      div.className="post";
      let id = document.createElement("span");
      id.className="userId";
      let title = document.createElement("p");
      title.className="title";
      let body= document.createElement("p");
      body.className="body";

      //append  the text for each element

  id.appendChild(document.createTextNode(post.id));
  title.appendChild(document.createTextNode(post.title));
  body.appendChild(document.createTextNode(post.body));

  // append the element to the post
  div.appendChild(id);
  div.appendChild(title);
  div.appendChild(body);

  // append the post to the container

  container.appendChild(div)

      
    });

      })