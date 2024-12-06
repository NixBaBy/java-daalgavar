let parentDiv = document.getElementById("parent");
let allcards = [
  {
    imgUrl:
      "	https://cdn1.unegui.mn/media/cache1/97/62/9762ac3016506ced02be06d07c1ae384.webp",
    price: "5say",
    tittle: "Хотын төвд 3 өрөө орон сууц",
    inf: "6 минутын өмнө УБ — Хан-Уул, Хан-Уул, 13 horoolol",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/2f/cd/2fcd51b0de503666a3ea7cb691b88a82.webp",
    price: "350say",
    tittle: "Toyota Prius 10, 11, 2001/2012",
    inf: "7 минутын өмнө УБ — Хан-Уул, Хан-Уул, Хороо 4",
  },
  {
    imgUrl:
      "	https://cdn1.unegui.mn/media/cache1/bd/5a/bd5a67c0f777764fc4dcc72842a61529.webp",
    price: "9.4say",
    tittle: "Toyota Prius 10, 11, 2001/2012",
    inf: "8 минутын өмнө УБ — , Хан-Уул, Хороо 6",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/00/1c/001c534157beb2ee8756ef833577e59f.webp",
    price: "500,000",
    tittle: "Toyota Prius 10, 11, 2001/2012",
    inf: "9 минутын өмнө УБ — Хан-Уул,  Хороо 5",
  },
  {
    imgUrl:
      "	https://cdn1.unegui.mn/media/cache1/45/e2/45e2930a463e161b3d67d40e866feeef.webp",
    price: "9.5say",
    tittle: "Toyota Prius 10, 11, 2001/2012",
    inf: "9 минутын өмнө УБ — Хан-Уул,  Хороо 5",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/cb/fd/cbfdb1d7367d57a06f2aef47ec935306.webp",
    price: "80,000",
    tittle: "Toyota Prius 10, 11, 2001/2012",
    inf: "9 минутын өмнө УБ — Хан-Уул,  Хороо 5",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/82/9d/829d38300799e6d08bf7e8d89b74c2b0.webp",
    price: "1.07 terbum",
    tittle: "Regis place хотхонд 115м² 2 өрөө",
    inf: "9 минутын өмнө УБ — Хан-Уул,  Хороо 5",
  },
  {
    imgUrl:
      "	https://cdn1.unegui.mn/media/cache1/e7/a5/e7a5dc58dc16d8114f86744456a3fa8a.webp",
    price: "1.07 terbum",
    tittle: "Regis place хотхонд 115м² 2 өрөө",
    inf: "9 минутын өмнө УБ — Хан-Уул,  Хороо 5",
  },
  {
    imgUrl:
      "  https://cdn1.unegui.mn/media/cache1/16/21/1621d79ef7332f061caf06c5f003cc5b.webp",
    price: "1.07 terbum",
    tittle: "Regis place хотхонд 115м² 2 өрөө",
    inf: "9 минутын өмнө УБ — Хан-Уул,  Хороо 5",
  },
];
let cards = "";

for (let i = 0; i < allcards.length; i++) {
  let card = `   <div class="card">
              <img
                src="${allcards[i].imgUrl}"
                alt=""
              />
              <div class="card-detail">
                <div class="price">${allcards[i].price}</div>
                <div class="tittle">${allcards[i].tittle}</div>
                <div class="inf">${allcards[i].inf}</div>
              </div>
            </div>`;
  cards = cards + card;
}

parentDiv.innerHTML = cards;
