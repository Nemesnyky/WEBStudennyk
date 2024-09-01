import React, { useState, useRef } from "react";
import "./Lecturer.scss";

const Lecturer = () => {
  // Стан для керування розгортанням
  const [isExpanded, setIsExpanded] = useState(false);

  // Стан для активної вкладки
  const [activeTab, setActiveTab] = useState("subjects");

  // Реф для контейнера, який буде прокручуватись
  const tabContentRef = useRef(null);

  // Дані викладача
  const lecturer = {
    name: "Тетеря Микола Сергійович",
    postsCount: 4,
    followersCount: 12,
    rating: 8.9,
    reviewsCount: 214,
    description:
      "Опис викладача: Микола Тетеря Сергійович – спеціаліст з програмування та викладач кафедри інформатики. Має багаторічний досвід викладання та розробки програмного забезпечення.",
  };

  // Фейкові дані предметів
  const subjects = [
    {
      id: 1,
      name: "Програмування на JavaScript",
      imageUrl:
        "https://www.haworth.com/content/dam/surfaces/north-america/trim/smooth/other/7r_10/7r_10.jpg",
    },
  ];

  // Функція для перемикання вкладок
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Функція для перемикання стану розгортання
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Функція для прокрутки вліво
  const scrollLeft = () => {
    if (tabContentRef.current) {
      tabContentRef.current.scrollLeft -= 1138; // прокрутка на 200px вліво
    }
  };

  // Функція для прокрутки вправо
  const scrollRight = () => {
    if (tabContentRef.current) {
      tabContentRef.current.scrollLeft += 1138; // прокрутка на 200px вправо
    }
  };

  return (
    <div className="ListWrapper border">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="ListContainer ContentText">
        <div className="LeftSection">
          <div className="mainImage">
            <div className="cover">
              <div className="coverWrap">
                <img
                  src="https://www.haworth.com/content/dam/surfaces/north-america/trim/smooth/other/7r_10/7r_10.jpg"
                  alt="Main"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="RightSection border InsideContent">
          <div className="TopSection">
            <div className="TitleAndFollowWrapper">
              <div className="Title">{lecturer.name}</div>
              <div className="followWrapper">
                <button className="CreateBtn">Стежити</button>
                <span className="secondaryText">
                  Дописів: {lecturer.postsCount}
                </span>
                <span className="secondaryText">
                  Стежить: {lecturer.followersCount}
                </span>
              </div>
            </div>
            <div className="RatingSection">
              <div className="ratingWrapper">
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span className="rating-value"> {lecturer.rating}</span>
                  <span className="rating-count">{lecturer.reviewsCount}</span>
                </div>
                <button className="ratingButton">
                  <span>
                    <i className="fa fa-star-o"></i> Оцінити
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="Text Inside">Опис</div>
          <div className="descriptionWrapper">
            <div
              className={`Description ${isExpanded ? "expanded" : "collapsed"}`}
            >
              {lecturer.description}
            </div>
            <button className="More" onClick={toggleExpand}>
              {isExpanded ? "Згорнути" : "Розгорнути"}
            </button>
          </div>
        </div>
      </div>
      <div className="TabsWrapper">
        <div className="Tabs">
          <button
            className={`TabButton ${activeTab === "subjects" ? "active1" : ""}`}
            onClick={() => handleTabClick("subjects")}
          >
            Предмети
          </button>
          <button
            className={`TabButton ${activeTab === "comments" ? "active2" : ""}`}
            onClick={() => handleTabClick("comments")}
          >
            Коментарі
          </button>
        </div>
        <div
          className={`TabsSection border ${
            activeTab === "subjects" ? "no-top-left-radius" : ""
          }`}
        >
          {activeTab === "subjects" && (
            <div className="TabContentWrapper">
              <div className="mediaSliderArrows">
                <span
                  className="material-symbols-outlined"
                  onClick={scrollLeft}
                >
                  chevron_left
                </span>
                <span
                  className="material-symbols-outlined"
                  onClick={scrollRight}
                >
                  chevron_right
                </span>
              </div>
              <div className="TabContent" ref={tabContentRef}>
                {subjects.map((subject) => (
                  <div className="imgWrapper" key={subject.id}>
                    <div className="mainImage all">
                      <div className="cover">
                        <div className="coverWrap">
                          <img src={subject.imageUrl} alt={subject.name} />
                        </div>
                      </div>
                    </div>
                    <div className="photoCaption">{subject.name}</div>
                  </div>
                ))}
              </div>
              <button class="More midle">Переглянути всіх</button>
            </div>
          )}

          {activeTab === "comments" && (
            <div className="TabContent Comments ContentText">
              <div className="CommentsNumberText">
                5 коментарі{" "}
                <button class="ratingButton">
                  <span>
                    Спочатку нові <i class="fa fa-star-o"></i>
                  </span>
                </button>
                <span class="InputWrapper">
                  <textarea class="Input TextArea" name="" id=""></textarea>
                </span>
              </div>
              <div className="AuthorsPeenComment">
                <div className="commentBody">
                  <div className="commentHead">
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
                          <span className="secondaryText">39хв тому</span>

                          <span className="mark">Закріплене</span>
                        </div>
                      </div>
                    </a>
                    <span class="material-symbols-outlined MoreVert">
                      more_vert
                    </span>
                  </div>
                  <div className="commentContent">
                    <p>
                      Миколо Тетеря Сергійовичу, дякую вам за вашу підтримку та
                      допомогу в навчанні! Ваша компетентність і готовність
                      ділитися знаннями надихають на досягнення нових вершин.
                      Радію, що маю можливість навчатися під вашим керівництвом.
                    </p>
                  </div>
                  <div className="commentControl">
                    <div className="CommentFeedbackWrapper Like">
                      <span>13</span>
                      <span class="material-symbols-outlined CommentFeedback">
                        thumb_up
                      </span>
                    </div>

                    <div className="CommentFeedbackWrapper Dislike">
                      <span>13</span>

                      <span class="material-symbols-outlined CommentFeedback">
                        thumb_down
                      </span>
                    </div>

                    <button class="More">Відповісти</button>
                  </div>
                </div>
              </div>
              <div className="AuthorsPeenComment">
                <div className="commentBody">
                  <div className="commentHead">
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
                          <span className="secondaryText">39хв тому</span>

                          <span className="mark">Закріплене</span>
                        </div>
                      </div>
                    </a>
                    <span class="material-symbols-outlined MoreVert">
                      more_vert
                    </span>
                  </div>
                  <div className="commentContent">
                    <p>
                      Миколо Тетеря Сергійовичу, дякую вам за вашу підтримку та
                      допомогу в навчанні! Ваша компетентність і готовність
                      ділитися знаннями надихають на досягнення нових вершин.
                      Радію, що маю можливість навчатися під вашим керівництвом.
                    </p>
                  </div>
                  <div className="commentControl">
                    <div className="CommentFeedbackWrapper Like">
                      <span>13</span>
                      <span class="material-symbols-outlined CommentFeedback">
                        thumb_up
                      </span>
                    </div>

                    <div className="CommentFeedbackWrapper Dislike">
                      <span>13</span>

                      <span class="material-symbols-outlined CommentFeedback">
                        thumb_down
                      </span>
                    </div>

                    <button class="More">Відповісти</button>
                  </div>
                </div>
              </div>
              <div className="UsersComment">
                <div className="commentBody">
                  <div className="commentHead">
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
                          <span className="secondaryText">12хв тому</span>
                        </div>
                      </div>
                    </a>
                    <span class="material-symbols-outlined MoreVert">
                      more_vert
                    </span>
                  </div>
                  <div className="commentContent">
                    <p>
                      Миколо Тетеря Сергійовичу, дякую вам за вашу підтримку та
                      допомогу в навчанні! Ваша компетентність і готовність
                      ділитися знаннями надихають на досягнення нових вершин.
                      Радію, що маю можливість навчатися під вашим керівництвом.
                    </p>
                  </div>
                  <div className="commentControl">
                    <div className="CommentFeedbackWrapper Like">
                      <span>13</span>
                      <span class="material-symbols-outlined CommentFeedback">
                        thumb_up
                      </span>
                    </div>

                    <div className="CommentFeedbackWrapper Dislike">
                      <span>13</span>

                      <span class="material-symbols-outlined CommentFeedback">
                        thumb_down
                      </span>
                    </div>

                    <button class="More">Відповісти</button>
                  </div>
                </div>
                <div className="commentChildren">
                  <div className="UsersComment">
                    <div className="commentBody">
                      <div className="commentHead">
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
                              <span className="secondaryText">12хв тому</span>
                            </div>
                          </div>
                        </a>
                        <span class="material-symbols-outlined MoreVert">
                          more_vert
                        </span>
                      </div>
                      <div className="commentContent">
                        <p>
                          Миколо Тетеря Сергійовичу, дякую вам за вашу підтримку
                          та допомогу в навчанні! Ваша компетентність і
                          готовність ділитися знаннями надихають на досягнення
                          нових вершин. Радію, що маю можливість навчатися під
                          вашим керівництвом.
                        </p>
                      </div>
                      <div className="commentControl">
                        <div className="CommentFeedbackWrapper Like">
                          <span>13</span>
                          <span class="material-symbols-outlined CommentFeedback">
                            thumb_up
                          </span>
                        </div>

                        <div className="CommentFeedbackWrapper Dislike">
                          <span>13</span>

                          <span class="material-symbols-outlined CommentFeedback">
                            thumb_down
                          </span>
                        </div>

                        <button class="More">Відповісти</button>
                      </div>
                    </div>
                    <div className="commentChildren">
                      <div className="UsersComment">
                        <div className="commentBody">
                          <div className="commentHead">
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
                                  <span className="secondaryText">
                                    12хв тому
                                  </span>
                                </div>
                              </div>
                            </a>
                            <span class="material-symbols-outlined MoreVert">
                              more_vert
                            </span>
                          </div>
                          <div className="commentContent">
                            <p>
                              Миколо Тетеря Сергійовичу, дякую вам за вашу
                              підтримку та допомогу в навчанні! Ваша
                              компетентність і готовність ділитися знаннями
                              надихають на досягнення нових вершин. Радію, що
                              маю можливість навчатися під вашим керівництвом.
                            </p>
                          </div>
                          <div className="commentControl">
                            <div className="CommentFeedbackWrapper Like">
                              <span>13</span>
                              <span class="material-symbols-outlined CommentFeedback">
                                thumb_up
                              </span>
                            </div>

                            <div className="CommentFeedbackWrapper Dislike">
                              <span>13</span>

                              <span class="material-symbols-outlined CommentFeedback">
                                thumb_down
                              </span>
                            </div>

                            <button class="More">Відповісти</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lecturer;
