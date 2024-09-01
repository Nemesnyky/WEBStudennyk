import React, { useState } from "react";
import axios from "axios";
import "./PostCreating.scss";

const PostCreating = () => {
  return (
    <div className="ListWrapper border">
      <div className="Text">Створення допису</div>
      <div className="Line"></div>
      <div className="ListContainer ContentText">
        <div className="LeftSection">
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
          <div className="Visibility border">
            <div>Видимість</div>

            <label>
              <input type="checkbox" className="real-checkbox" />
              <span className="custom-checkbox"></span>
              Для всіх
              <span className="IconImg"></span>
            </label>

            <label>
              <input type="checkbox" className="real-checkbox" />
              <span className="custom-checkbox"></span>
              Приватне
              <span className="IconImg"></span>
            </label>

            <label>
              <input type="checkbox" className="real-checkbox" />
              <span className="custom-checkbox"></span>
              Не для всіх
            </label>
          </div>
        </div>
        <div className="RightSection">
          <div className="ContentTextWrapper">
            <div>
              Посилання на фото<span className="IconImg"></span>
            </div>
            <div className="ContentLink purple">Застосувати</div>
          </div>
          <span className="InputWrapper">
            <input
              className="Input"
              type="text"
              placeholder="Введіть посилання на фото"
            />
          </span>
          <div>Назва</div>
          <span className="InputWrapper">
            <input
              className="Input"
              type="text"
              placeholder="Введіть посилання на фото"
            />
          </span>
          <div>
            Додати редакторів<span className="IconImg"></span>
          </div>
          <span className="InputWrapper">
            <input
              className="Input"
              type="text"
              placeholder="Введіть посилання на фото"
            />
          </span>
          <div>Теги</div>
          <span className="InputWrapper">
            <input
              className="Input"
              type="text"
              placeholder="Оберіть відповідні теги"
            />
          </span>
          <div>
            Список відтворення<span className="IconImg"></span>
          </div>
          <span className="InputWrapper">
            <input
              className="Input"
              type="text"
              placeholder="Обиріть один або декілька списків відтворення"
            />
          </span>
          <div className="ContentTextWrapper">
            <div>
              Додати викладачів<span className="IconImg"></span>
            </div>
            <div className="ContentLink purple">Створити нового викладача</div>
          </div>
          <span className="InputWrapper">
            <input className="Input" type="text" placeholder="Оберіть імена" />
          </span>
          <div>Опис</div>
          <span className="InputWrapper">
            <textarea className="Input TextArea" name="" id=""></textarea>
          </span>
        </div>
      </div>
      <div className="Line"></div>
      <div className="ButtonWrapper">
        <button className="CreateBtn">Створити</button>
      </div>
    </div>
  );
};

export default PostCreating;
