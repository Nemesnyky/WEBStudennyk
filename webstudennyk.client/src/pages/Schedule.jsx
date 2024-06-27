import React from "react";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <div className="Schedule">
      <div className="DateWrapper">
        <div className="Date">06.06.2023</div>
        <div className="WeekNumber">21-тиждень</div>
        <div className="WeekType">Непарний</div>

      </div>
      <table>
        <thead>
          <tr>
            <th>День тижня/час</th>
            <th>Понеділок</th>
            <th>Вівторок</th>
            <th>Середа</th>
            <th>Четвер</th>
            <th>П'ятниця</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>8.40-9.25</div>
              <div>9.30-10.15</div>
            </td>
            <td>
              <div>ІСТП (практика)</div>
              <div>
                Шишацький Д.В.
                <br />
                Поліщук Н.В.
                <br />
                Свистунов А.О.
              </div>
            </td>
            <td>
              <div>Теорія алгоритмів (практика)</div>
              <div>
                Зубенко В.В.
                <br />
                Шишацький А.В.
              </div>
            </td>
            <td></td>
            <td>
              <div>Алгоритміка (лекція)</div>
              <div>Тарануха В.Ю.</div>
            </td>
            <td>
              <div>Дослідження операцій (лекція)</div>
              <div>Заворотинський А.В.</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>10.35-11.20</div>
              <div>11.25-12.10</div>
            </td>
            <td>
              <div>Дослідження операцій (практика)</div>
              <div>
                Костогриз Р.
                <br />
                Брагацень О.А.
              </div>
            </td>
            <td>
              <div>Бази даних та інформаційні системи (практика)</div>
              <div>
                Кулябко П.П.
                <br />
                Завадський І.О.
                <br />
                Осіпьонок М.М.
              </div>
            </td>
            <td>
              <div>Математична статистика (лекція)</div>
              <div>Пономарьов В.Д.</div>
            </td>
            <td>
              <div>Бази даних та інформаційні системи (лекція)</div>
              <div>Кулябко П.П.</div>
            </td>
            <td>
              <div>ІСТП (лекція)</div>
              <div>Омельчук Л.Л.</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>12.20-13.05</div>
              <div>13.10-13.55</div>
            </td>
            <td>
              <div>Теорія алгоритмів (лекція)</div>
              <div>Шкільняк С.С.</div>
            </td>
            <td>
              <div>АНГЛ МОВА</div>
              <div>
                Калєнеченко О.О.
                <br />
                Андрійчук Т.В.
              </div>
            </td>
            <td></td>
            <td>
              <div>Алгоритміка (практика)</div>
              <div>Тарануха В.Ю.</div>
            </td>
            <td>
              <div>Дослідження операцій (лекція)</div>
              <div>Заворотинський А.В.</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>14.05-14.50</div>
              <div>14.55-15.40</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="ButtonWrapper">
      <button>Переглянути розклад на наступний тиждень</button>
      </div>
    </div>
  );
};

export default Schedule;
