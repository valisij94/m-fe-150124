# README

## Практическое занятие №42

### Тема:

Репозитарий содержит материалы по практическому занятию №42, посвященному продолжению работы с React Router.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Добавляем новый параметризованный роут в Routes - это будет роут `/products/:id` - то есть, мы будем передавать в УРЛе параметр (идентификатор товара). По этому роуту будем рендерить компонент `ProductDetailPage`.
2. Реализуем передачу параметров в роуте. Добавляем на карточку товара (компонент `ProductCard`), ссылку "Подробнее". При клике на нее, нужно переходить на страницу подробной информации о товаре, `ProductDetailPage`. Для этого, нужно прописать этой ссылке путь вида `/products/PRODUCT_ID`, где в качестве PRODUCT_ID используем идентификатор товара с этой карточки товара.
3. Теперь, воспользуемся этим на странице подробной информации о товаре. В этом нам поможет хук `useParams`. Нам нужно взять параметр id из УРЛа, и сделать запрос по адресу `https://dummyjson.com/products/PROD_ID`. Результаты будут содержать данные товара, которые нужно отрисовать на этой странице.
4. Вспоминаем принудительную навигацию. На странице `LoginForm`, сделать так, чтобы при нажатии на кнопку Enter, при условии наличия логина и пароля, пользователя перебрасывало бы на страницу товаров.

### Полезные ссылки по занятию:
 - [React Router v6](https://blog.logrocket.com/react-router-v6-guide/) - отличная информативная статья (увы, англоязычная), по использованию свежей версии роутера.
 - [Что нового в React Router](https://habr.com/ru/companies/kts/articles/598835/) - русскоязычная статья, освещает основные отличия нового роутера от предыдущих версий. Можно просмотреть после ознакомления с первой статьей, и оф.документацией.