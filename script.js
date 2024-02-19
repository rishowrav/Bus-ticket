const classNames = document.getElementsByClassName("seat");
let sum = 0;
let incrementOfSeat = 0;
let decrementOfSeat = 40;
for (let className of classNames) {
  className.addEventListener("click", function (e) {
    // Set price list (price menu)
    const seatName = e.target.innerText;

    const p1 = document.createElement("p");
    p1.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = "Economoy";
    const p3 = document.createElement("p");
    p3.innerText = 550;
    const div = document.createElement("div");
    div.setAttribute("class", "flex justify-between text-gray-400");

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    const seatPriceList = document.getElementById("seatPriceList");

    // double selected seat avoid (condition)
    if (!e.target.classList.contains("selectedBusSeat")) {
      if (incrementOfSeat < 4) {
        // discount disabled to enable condition
        if (incrementOfSeat >= 3) {
          document
            .getElementById("couponField")
            .childNodes[1].removeAttribute("disabled");
          document
            .getElementById("couponField")
            .childNodes[3].removeAttribute("disabled");
        }

        // condition of seat plan (get 4 seats for one passenger)
        seatPriceList.appendChild(div);

        // add selected set color functionality
        e.target.classList.add(
          "bg-[#1DD100]",
          "hover:bg-[#1DD100]",
          "text-white",
          "selectedBusSeat"
        );

        // sum of price and show sum of total price
        const seatPrice = document.querySelector("#seatPriceList");
        sum = sum + parseInt(seatPrice.childNodes[0].childNodes[2].innerText);
        document.getElementById("totalPrice").innerText = sum;

        // discount 15% and 20% condition
        document
          .getElementById("discountButton")
          .addEventListener("click", function (e) {
            const couponValue =
              e.target.parentNode.childNodes[1].value.toUpperCase();

            if (couponValue === "NEW15") {
              document.getElementById(
                "totalPrice"
              ).innerHTML = `<del>${sum}</del>`;
              const discount15 = sum - (sum * 15) / 100;
              document.getElementById("grandPrice").innerText = discount15;
              console.log(discount15);
              e.target.parentNode.classList.add("hidden");
            } else if (couponValue === "COUPLE20") {
              document.getElementById(
                "totalPrice"
              ).innerHTML = `<del>${sum}</del>`;
              const discount20 = sum - (sum * 20) / 100;
              document.getElementById("grandPrice").innerText = discount20;
              console.log(discount20);
              e.target.parentNode.classList.add("hidden");
            } else {
              e.target.parentNode.childNodes[1].classList.add("border-red-500");
            }
          });

        // increment and Decrement number of seat
        incrementOfSeat++;
        decrementOfSeat--;
        document.getElementById("incrementOfSeat").innerText = incrementOfSeat;
        document.getElementById("decrementOfSeat").innerText = decrementOfSeat;
      } else {
        alert("You can select max 4 seats");
      }
    }
  });
}

// Next button functionality
document.getElementById("nextButton").addEventListener("click", function (e) {
  const nameLength = e.target.parentNode.childNodes[3].value.length;
  const phoneLength = e.target.parentNode.childNodes[7].value.length;
  const emailLength = e.target.parentNode.childNodes[11].value.length;
  const priceOfTotal = parseInt(
    e.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[9]
      .childNodes[3].childNodes[1].innerText
  );

  if (
    nameLength > 0 &&
    phoneLength > 0 &&
    emailLength > 0 &&
    priceOfTotal > 0
  ) {
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].classList.remove(
      "hidden"
    );
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].classList.add(
      "hidden"
    );
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].classList.add(
      "hidden"
    );
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].classList.add(
      "hidden"
    );
    e.target.parentNode.childNodes[3].value = "";
    e.target.parentNode.childNodes[7].value = "";
    e.target.parentNode.childNodes[11].value = "";
  }
});
// Success button functionality
document
  .getElementById("successScreen")
  .addEventListener("click", function (e) {
    e.target.parentNode.parentNode.parentNode.childNodes[1].classList.remove(
      "hidden"
    );
    e.target.parentNode.parentNode.parentNode.childNodes[3].classList.remove(
      "hidden"
    );
    e.target.parentNode.parentNode.parentNode.childNodes[5].classList.remove(
      "hidden"
    );
    e.target.parentNode.parentNode.classList.add("hidden");
  });
