const item = document.querySelector(".light");
const body = document.querySelector('body')
const left = document.querySelector('.btn')
left.innerHTML = `<p>Light Mode</p>`
left.addEventListener('click', function () {
    if (body.style.backgroundColor === "crimson") {
        body.style.backgroundColor = "White";
        body.style.color = "black"
        left.innerHTML = `<p>Light Mode<i class="fa-solid fa-moon fa-beat-fade"></i></p>`
    }
    else {
        body.style.backgroundColor = "crimson"
        body.style.color = "white"
        left.innerHTML = `<p>Dark Mode<i class="fa-solid fa-circle-half-stroke fa-beat-fade"></i></p>`

    }

})


item.addEventListener('mouseover', function (event) {
      if (event.target.tagName === 'IMG') {
          // Check if the mouse is over an image inside the '.light' element
          item.innerHTML = `
          <img src="Onn.png" alt="light"><br>
            <h2 style="color:blue;">Light is Onn</h2>
          `;
      } else {
          // The mouse is over the '.light' element, but not the image
          item.innerHTML = `<img src="off.png" alt="light"><br>
          <h2 style="color:green;">Light is Off</h2>`;
      }
  });