document.getElementById("sellBtn").addEventListener("click", function () {
  alert("Sell product feature coming soon!");
});
function generateAI() {
  document.getElementById("title").value =
    "Second-Hand Engineering Book";

  document.getElementById("description").value =
    "Well-maintained engineering book, suitable for college students. No missing pages.";
}



//this fuction  give the logic of submit 
function submitProduct(event) {
  event.preventDefault();

  const product = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value
  };

  fetch("http://localhost:5000/add-product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}
