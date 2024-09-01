import React, { useState } from "react";
import "./Subject.scss";

export function Subject() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ListWrapper">
      <div className="mainContent">
        <div className="mainImage">
          <div className="cover">
            <div className="coverWrap">
              <img
                src="https://i.postimg.cc/BQLTfD1G/asp-net-Untitled-1-copy.jpg"
                alt="Main"
              />
            </div>
          </div>
        </div>
        <div className="infoSection">
          <div className="TextWrapper">
            <span className="titleText">
              Інструментальні середовища та технології програмування
            </span>
            <div className="ratingWrapper">
              <div className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <span className="rating-value"> 8.9</span>
                <span className="rating-count">214</span>
              </div>
              <button className="ratingButton">
                <span>
                  <i className="fa fa-star-o"></i> Оцінити
                </span>
              </button>
            </div>
          </div>
          <div className="descriptionWrapper">
            <div
              className={`Description ${isExpanded ? "expanded" : "collapsed"}`}
            >
              Мета дисципліни – засвоєння знань з інструментальних середовищ та
              технологій програмування. Оволодіння базовими навичками
              проектування програмних систем, набуття навичок використання
              інструментальних середовищ програмування, та використання
              технологій роботи з даними та технологій створення веб-додатків.
              Мета дисципліни – засвоєння знань з інструментальних середовищ та
              технологій програмування. Оволодіння базовими навичками
              проектування програмних систем, набуття навичок використання
              інструментальних середовищ програмування, та використання
              технологій роботи з даними та технологій створення веб-додатків.
            </div>
            <button className="More" onClick={toggleExpand}>
              {isExpanded ? "Згорнути" : "Розгорнути"}
            </button>
          </div>
          <div className="wrapper">
            <a href="#" class="editors">
              <div class="editorsPhotoWrapper">
                <span class="editorsPhoto">
                  <div class="coverWrap">
                    <img
                      src="https://test-front.mangalib.me/uploads/team/sadistic-summer/cover/NOU2XLD00HCG_thumb.jpg"
                      class="coverImg"
                      loading="lazy"
                    ></img>
                  </div>
                </span>
              </div>
              <div class="editorsBody">
                <div class="teamEditorsName">
                  <span>Sadistic Summer</span>
                </div>
              </div>
            </a>
            <a href="#" class="editors">
              <div class="editorsPhotoWrapper">
                <span class="editorsPhoto">
                  <div class="coverWrap">
                    <img
                      src="https://i.work.ua/article/579b.jpg"
                      class="coverImg"
                      loading="lazy"
                    ></img>
                  </div>
                </span>
              </div>
              <div class="editorsBody">
                <div class="teamEditorsName">
                  <span>SEGA</span>
                </div>
              </div>
            </a>
            <a href="#" class="editors">
              <div class="editorsPhotoWrapper">
                <span class="editorsPhoto">
                  <div class="coverWrap">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKb7is8Yrxq6Y3beOsnLt9_j4QwwJW71JCQ&s"
                      class="coverImg"
                      loading="lazy"
                    ></img>
                  </div>
                </span>
              </div>
              <div class="editorsBody">
                <div class="teamEditorsName">
                  <span>AGARAGAR</span>
                </div>
              </div>
            </a>
          </div>
          <div className="tagWrapper">
            <a href="#" class="Tag">
              КНУ
            </a>
            <a href="#" class="Tag">
              ФКНК
            </a>
            <a href="#" class="Tag">
              122 Інформатика
            </a>
          </div>
        </div>
      </div>

      <div className="slider">
        <div class="media-section-head">
          <div class="sectionProfessor">
            <span>Викладачі</span>
            <button class="More2">
              <span>Переглянути все</span>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="wrapper">
          <div className="cardItem">
            <a href="/ru/characters/105144--saki-aoi" className="cover _shadow">
              <div className="cover__wrap">
                <img
                  src="https://csc.knu.ua/media/persons/4f6d33af-96e3-480b-9f1e-22bf5d6d0362.jpg.600x600_q85_autocrop_upscale.jpg"
                  className="cover__img _loaded"
                  loading="lazy"
                  alt="Свистунов Антон Олександрович"
                />
              </div>
            </a>
            <a
              href="/ru/characters/105144--saki-aoi"
              className="card-item-caption"
            >
              <div className="card-item-caption__main">
                Свистунов Антон Олександрович
              </div>
            </a>
          </div>
          <div className="cardItem">
            <a
              href="/ru/characters/105145--ryuuji-taiga"
              className="cover _shadow"
            >
              <div className="cover__wrap">
                <img
                  src="https://csc.knu.ua/media/persons/702af0f4-19c2-4365-b553-921563205304.jpg.600x600_q85_autocrop_upscale.jpg"
                  className="cover__img _loaded"
                  loading="lazy"
                  alt="РОмельчук Людмила Леонідівна"
                />
              </div>
            </a>
            <a
              href="/ru/characters/105145--ryuuji-taiga"
              className="card-item-caption"
            >
              <div className="card-item-caption__main">
                Омельчук Людмила Леонідівна
              </div>
            </a>
          </div>
          <div className="cardItem">
            <a
              href="/ru/characters/99135--makoto-hanaoka"
              className="cover _shadow"
            >
              <div className="cover__wrap">
                <img
                  src="https://csc.knu.ua/media/persons/e7d343b5-c1cc-4b42-b9e0-61f70297132d.jpg.600x600_q85_autocrop_upscale.jpg"
                  className="cover__img _loaded"
                  loading="lazy"
                  alt="Русіна Наталія Геннадіївна"
                />
              </div>
            </a>
            <a
              href="/ru/characters/99135--makoto-hanaoka"
              className="card-item-caption"
            >
              <div className="card-item-caption__main">
                Русіна Наталія Геннадіївна
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="slider">
        <div class="media-section-head">
          <div class="sectionProfessor">
            <span>Матеріали</span>
            <button class="More2">
              <span>Переглянути все</span>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="wrapper">
          <div className="cardItem material">
            <a
              href="https://docs.google.com/document/d/13jYD0xu8cUqT320GUkpOrQBuzdy9L6zyFc3k-054ag4/edit"
              className="cover _shadow"
            >
              <div className="cover__wrap Material">
                <img
                  src="https://cover.imgslib.link/uploads/characters/105144/cover/7ff39dca-8c07-4b24-a305-31993e61d131.jpg"
                  className="cover__img _loaded"
                  loading="lazy"
                  alt="Шпори до лаб"
                />
              </div>
            </a>
            <a
              href="https://docs.google.com/document/d/13jYD0xu8cUqT320GUkpOrQBuzdy9L6zyFc3k-054ag4/edit"
              className="card-item-caption"
            >
              <div className="card-item-caption__main">Шпори до лаб</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;
