# README

## Практическое занятие №30

### Тема:

Репозитарий содержит материалы по практическому занятию №30, посвященному ознакомлению с фреймворком React.js.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Структура каталогов в create-react-app
 - node_modules - здесь содержатся все зависимости проекта, то есть библиотеки, которые мы подключили (или которые были подключены по умолчанию к проекту create-react-app). Эту папку мы не трогаем, и руками в ней ничего не меняем - ее содержимым управляет NPM при установке/обновлении/удалении зависимостей
 - public - в этой директории хранится файл `index.html`, а также ресурсы проекта (картинки, файл манифеста и файл для поисковых роботов). В этой папке нам будет интересен только `index.html`.
 - src - здесь все исходники (JS, CSS, юнит-тесты). Здесь мы будем работать: создавать свои каталоги, файлы, писать код и стили и многое другое.
 - `package-lock.json` - эталонный файл зависимостей проекта. Вручную ничего в нем не меняем.
 - `package.json` - файл с описанием проекта и его зависимостей. Вручную менять можно, но пока мы этого делать не будем.

### Задачи занятия
1. Разбираемся с тем, как работает JSX. В файле `App.js`, удаляем все из `<div className='App'>`. Вместо этого содержимого, нам нужно добавить туда параграф с текстом `Hello World from React!`
2. Работаем с JavaScript в JSX. Теперь в наш параграф к существующему тексту нам нужно добавить текущую дату (`new Date()`). Чтобы работать с JS, нам понадобится обернуть содержимое нашего параграфа в фигурные скобки.
3. Попробуем создать свой компонент, назовем его `SimpleParagraph`. Это будет компонент, который будет рисовать нам параграф с текстом `Hello World from React!`. Смысловой нагрузки у такого компонента пока немного - но мы это исправим в будущем. Нужно, в файл `App.js`, создать функцию `SimpleParagraph`, которая будет создавать такой параграф.
4. Обычно компоненты имеют свое "место жительства" - отдельные файлы. Переселим наш компонент. Для этого:
 - в папке src создаем подпапку `components`
 - в папке `components` создаем файл `SimpleParagraph.js`
 - в этом файле, наша задача - создать компонент, который отрендерит нам параграф с текстом `Hello From new component!`
5. Применяем созданный компонент в `App.js`. Нам нужно:
 - импортировать свежесозданный компонент (`import`)
 - отрендерить его (например, в самом низу нашего блока `return`). Важный момент! React не умеет возвращать несколько DOM-узлов (или компонентов), поэтому нам нужно ВЕСЬ возвращаемый результат обернуть в `<div></div`. То есть, мы должны гарантировать, что наша функция, в блоке return вернет нам ОДИН DOM-элемент или React-компонент.
6. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
7. Поработаем с отрисовкой списков. Создаем новый компонент, `SimpleList`. В нем нам нужно отрисовать простой список. Его мы рисуем как `<ul>`. В компоненте, импортируем `simpleList` из файла `data.js` - это будет источник данных для нашего списка. Нужно, чтобы компонент возвращал ul, в котором будут li с наименованиями из массива.
8. И еще немного списков. Тут мы отрисуем список посложнее. Нам предлагается отрисовать список товаров (`complicatedList` из `data.js`). Товары рендерим в виде `div`-ов, которые содержат `h3` с наименованием товара, и `p` с ценой товара. Импортируем из `data.js` массив `complicatedList` - это источник данных. Товары рисуем внутри `div`. То есть, ожидаемая разметка примерно такая:
```
<div>
  <div>
    <h3>Hammer</h3>
    <p>100</p>
  </div>
  <div>
    <h3>Drill</h3>
    <p>200</p>
  </div>
  // ...
</div>
```

### Полезные ссылки по занятию:
 - Описание [create-react-app](https://create-react-app.dev/).
 - Свежая [документация](https://react.dev/) по React. Имеет смысл посмотреть "по диагонали", погулять по сайту, и посмотреть на примеры.
 - React [основы](https://react.dev/learn). Рекомендуется просмотреть хотя бы до раздела "Responding to events".
 - ОЧЕНЬ РЕКОМЕНДУЕТСЯ бесплатный курс [React.JS - Путь самурая](https://www.youtube.com/watch?v=gb7gMluAeao), от Димыча. Курс длинный, местами скучноватый, но дает отличное понимание о том, как в реакте многое работает "под капотом".

# README из create-react-app: описание полезных команд, ссылки и прочее.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
