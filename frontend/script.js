const htmlPage = `
<div class="pre-main">
    <div class="pre-div">
        <img class="pre-img" src="img/preloader.gif" alt="preloader" />
    </div>
</div>

<header>
      <div class="div1">
        <a href="#"><img src="./img/logo.svg" alt="logo" /></a>
      </div>
      <div class="div2">
        <ul>
          <li><a class="header-a" href="preloader.html">Žurnalas</a></li>
          <li><a class="header-a" href="#">Parduotuvé</a></li>
          <li><a class="header-a" href="#">Tinklalaidės</a></li>
          <li><a class="header-a" href="#">Renginiai</a></li>
          <li><a class="header-a" href="#">Apie</a></li>
        </ul>
      </div>
      <div class="div3">
        <div>
          <a href=""
            ><img class="header-img" src="./img/loupe.png" alt="loupe"
          /></a>
        </div>
        <div>
          <a href=""
            ><img
              class="header-img"
              src="./img/love-hand-drawn-heart-symbol-outline.png"
              alt="heart"
          /></a>
        </div>
        <div>
          <a href=""
            ><img
              class="header-img"
              src="./img/shopping-basket.png"
              alt="basket"
          /></a>
        </div>
      </div>
    </header>
    <main>
      <section class="section-1">
        <div class="section-1-div-1">
          <div class="hashtag">
            <p class="hashtag-p">#mitiba #sveikata #gyvenimo kokybé</p>
          </div>
          <div class="sentence">
            <p class="sentence-p">
              Gydytoja dietologė E. Gavelienė:
              <em>
                <strong> „Mėgautis maistu </strong>
              </em>
              nereiškia valgyti bet kaip.“
            </p>
          </div>
          <div class="div-span">
            <span class="first-s"> Autorė: Ingrida Gelminauskienė </span>
            <span> Skaitymo laikas: 7 min. </span>
          </div>

          <div class="div-anc">
            <a class="ach-1" href="">Skaityti daugiau</a>
            <div class="fancy-div">
              <a class="ach-2 fancy-link" href="">Visi straipsniai</a>
            </div>
          </div>
        </div>
        <div class="section-1-div-2">
          <img
            class="img-cooking"
            src="./img/mityba_polina-tankilevitch-1440x960.jpeg"
            alt="cooking girls"
          />
        </div>
      </section>
      <section class="section-2">
        <div class="cards card-1">
          <div class="cardTitle titleC1">
            <span>Protui</span>
          </div>
          <div class="cardIMG imgC1">
            <img
              src="https://mieloji.lt/wp-content/uploads/2022/04/tikejimas_thirdman--700x1050.jpg"
              alt=""
            />
          </div>
          <div class="cardTags tagC1">
            <span>#divasingumas #tikéjimas #religija</span>
          </div>
          <div class="cardText textC1">
            <span>Kas bijo dvasinguju</span>
          </div>
          <div class="cardBottom bottomC1">
            <span>Angelina Lapinskaité | Skaitymo laikas: 6 min.</span>
          </div>
        </div>

        <div class="cards card-2">
          <div class="cardTitle titleC2">
            <span>Sielai</span>
          </div>
          <div class="cardIMG imgC2">
            <img
              src="https://mieloji.lt/wp-content/uploads/2022/01/Motinyste_pagrindine_Migles-Silvos-nuotr.-700x1050.jpg"
              alt=""
            />
          </div>
          <div class="cardTags tagC2">
            <span>#motinysté #vienišumas #lūkesčiai</span>
          </div>
          <div class="cardText textC2">
            <span>Apie motinystés vienišumą</span>
          </div>
          <div class="cardBottom bottomC2">
            <span>Giedré Rimké | Skaitymo laikas: 6 min. </span>
          </div>
        </div>

        <div class="cards card-3">
          <div class="cardTitle titleC3">
            <span>Kunui</span>
          </div>
          <div class="cardIMG imgC3">
            <img
              src="https://mieloji.lt/wp-content/uploads/2022/09/mustuju-karta_irina-demyanovskikh-700x1050.jpg"
              alt=""
            />
          </div>
          <div class="cardTags tagC3">
            <span>#saviraiška #dailésterapija #psichoanalizé </span>
          </div>
          <div class="cardText textC3">
            <span
              >Dailés terapijos priminimas: esu daugiau, negu apie save
              galvoju</span
            >
          </div>
          <div class="cardBottom bottomC3">
            <span>Jolanta Laurent | Skaitymo laikas: 15 min. </span>
          </div>
        </div>
      </section>
    </main>
    `;

const rootElement = document.querySelector("#root");
rootElement.insertAdjacentHTML("beforeend", htmlPage);

window.addEventListener("load", function () {
    setTimeout(function(){
        const loader = document.querySelector(".pre-main");
        loader.style.display = "none";
    },3000)
});