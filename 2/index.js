let parentDiv = document.getElementById("sliders-name");

let cardInfos = [
  {
    min: "1мин",
    tittle: "Нобель 2024-ийн эзэд: ХЭН? ЯАГААД?",
    Brand: "Techworm",
    imgUrl:
      "https://unread.today/files/fb0f77dd-ca16-4803-8f17-83cccdc85cb1/c8455aee612dec41ad3ae7e381835364_square.jpg",
  },
  {
    min: "5мин",
    tittle: "Өвөрмөц мэргэжлийг өвөрлөсөн түүхүүд",
    Brand: "Тайлбарлах",
    imgUrl:
      "https://unread.today/files/007afc64-288a-4208-b9d7-3eda84011c1d/d0e8695ff2eb996c217d9697d4a71e8f_square.jpg",
  },
  {
    min: "10мин",
    tittle: "Пробиотик: Таны гэдсийг хамгаалагч супер баатруудтай ",
    Brand: "зочинтой ",
    imgUrl:
      "https://unread.today/files/007afc64-288a-4208-b9d7-3eda84011c1d/9e125b66fda6825bdebde62819344e7f_square.jpg",
  },
  {
    min: "3мин",
    tittle: "Улаанбаатарын хамгийн таатай оффис: Алтан Жолоо Тауэр",
    Brand: "мэдүүштэй",
    imgUrl:
      "https://unread.today/files/5409fb7e-6b28-4095-834c-ece240290ec2/383865a99e5786f1c5cce819b224738f_square.png",
  },
  {
    min: "4мин",
    tittle: "Апп тойм: eSchool - Боловсролын нэгдсэн платформ",
    Brand: "Тайлбарлах",
    imgUrl:
      "https://unread.today/files/dca82359-3f6e-4c03-99ef-ef493c68a7aa/afa433c76feccdc25e0a21723c9f9f3f_square.jpg",
  },
];
let cards = "";
for (let i = 0; i < cardInfos.length; i++) {
  let card = `    <div class="slider">
     <img src="${cardInfos[i].imgUrl}" alt="">
        <div class="slider-top">
          <div class="cycle"></div>
          <div class="min">
            <p>${cardInfos[i].min}</p>
          </div>
        </div>
        <div class="slider-bot">
          <p>${cardInfos[i].tittle}</p>
          <p>${cardInfos[i].Brand}</p>
        </div>
      </div>`;
  cards += card;
}
parentDiv.innerHTML = cards;
