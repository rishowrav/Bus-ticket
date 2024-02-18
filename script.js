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
    seatPriceList.appendChild(div);

    // add selected set color functionality
    // bg-[#1DD100] hover:bg-[#1DD100] text-white
    e.target.classList.add("bg-[#1DD100]", "hover:bg-[#1DD100]", "text-white");

    // sum of price and show sum of total price
    const seatPrice = document.querySelector("#seatPriceList");
    sum = sum + parseInt(seatPrice.childNodes[0].childNodes[2].innerText);
    document.getElementById("totalPrice").innerText = sum;

    // increment and Decrement number of seat
    incrementOfSeat++;
    decrementOfSeat--;
    document.getElementById("incrementOfSeat").innerText = incrementOfSeat;
    document.getElementById("decrementOfSeat").innerText = decrementOfSeat;

    // condition of seat plan (get 4 seats for one passenger)
    if (incrementOfSeat > 4) {
      alert("max 4 you can get");
    }
  });
}
