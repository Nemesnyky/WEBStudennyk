import React, { useState } from "react";
import axios from "axios";
import "./CreateLecturer.scss";

const CreateLecturer = () => {
  return (
    <div className="ListWrapper border">
      <div className="Text">Створення викладача</div>
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

export default CreateLecturer;
