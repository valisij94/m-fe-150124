import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <h1>Hello React! Something!</h1>
    <PersonalCard/>
    <Copyright />
  </div>
);

/*
1. Пристрелочная задача. Делаем компонент, который будет отображать "копирайт" нашего проекта (Copyright). Это должен быть параграф, с текстом "Учебный проект. Все права защищены. 2024". Для символа копирайта используем `&#169;`.
*/
/*
2. Добавляем стили. В файле `App.css` создадим класс `copyright` для нашего копирайта. Он должен занимать всю ширину, цвет текста - серый, выравнивание текста по центру, размер шрифта 14.
*/

function Copyright() {
  return (
    <p className='copyright'>&#169; Учебный проект. Все права защищены. 2024</p>
  );
}

/*
3. Теперь попробуем создать компонент `PersonalCard`, который будет отвечать за отрисовку карточки с вашими данными. Карточка содержит:
 - заголовок h3 с ФИО
 - параграф с названием вашей квалификации (не скромничаем, но и не теряем связь с реальностью)
 - параграф "О себе" - здесь напишем пару слов о том, какие мы классные.
 - аватар (картинка - в идеале, с фото). Хорошо будет, чтобы картинка была круглая
 */

 /*
 4. Стилизуем компонент. Нужно создать класс `personalInfoContainer`. Нужно сделать так, чтобы ФИО, квалификация и описание занимали бы половину ширины, а остальное занимала бы картинка. Также, нужно будет стилизовать и изображение - задать ему ширину 100% контейнера, и соотношение сторон 1:1 (aspect-ratio).
 */

 function PersonalCard() {
  return(
    <div className='personalCard'>
      <div className='personalInfo'>
        <h3>Жорж Милославский</h3>
        <p>Специалист широкого профиля</p>
        <p>Артист больших и малых академических театров</p>
      </div>
      <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Zhorzh_miloslavski.jpg/274px-Zhorzh_miloslavski.jpg' className='personalPhoto'></img>
    </div>
  )
}