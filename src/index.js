function validateLink() {
  const input = document.getElementById("link-input");
  if (input.value) {
    if (isUrlValid(input.value)) {
      handleMessage("process");
    } else {
      handleMessage();
      return;
    }
    const apiUrl = `http://localhost:5000/generate_pdf?url=${input.value}`;
    fetch(apiUrl)
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          // console.log(data.message);
          handleMessage("success");
        } else {
          // console.log(data.message);
          handleMessage("failed");
        }
      })
      .catch((error) => {
        handleMessage("", `Error in API calling: ${error}`);
        // console.log(`Error in API calling: ${error}`);
      });
  }
}

function handleMessage(status = "", message = "") {
  const info = document.getElementById("info");
  const button = document.querySelector(".btn");
  const ptag = document.createElement("p");
  ptag.style.fontSize = "small";
  info.innerHTML = "";
  if (status === "process") {
    ptag.innerHTML =
      "We are processing PDF for you, please wait...<br>Time taken may vary on size on content";
    ptag.style.color = "skyblue";
    button.id = "disable-btn";
    button.disabled = true;
  } else if (status === "success") {
    ptag.innerHTML =
      "PDF downloaded successfully, saved in Downloads directory";
    ptag.style.color = "#04c704";
    button.disabled = false;
    button.id = "";
  } else if (status === "failed") {
    ptag.innerHTML = "Something went wrong, please try again";
    ptag.style.color = "red";
    button.disabled = false;
    button.id = "";
  } else {
    ptag.innerHTML = message || "Please enter valid Link";
    ptag.style.color = "red";
    button.disabled = false;
    button.id = "";
  }
  info.append(ptag);
}

function isUrlValid(url) {
  var res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res == null) return false;
  else return true;
}
