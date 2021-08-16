1. Install react-redux @reduxjs/toolkit

2. Заворачиваем все приложение в index.js в компонент Provider и передаем в store через пропсы
   <Provider store={store}>

3. Coздаем глобальный state он же store
   import { configureStore } from "@reduxjs/toolkit";

4. Создаем отдельные части стейта - reducers
   import { createReducer } from "@reduxjs/toolkit";

5. Создаем начальное состояние стейта в reducer
   const initialState = []

6. Импортируем стейт в reducer
   import { gallery } from "./reducer";

7. Coздаем actions.js
   import {createAction} from '@reduxjs/toolkit'

8. Cоздаем действия(action) для каждого reducer
   "export const getImagesReqest = createAction("getImages/request");"

9. Создаем operations.js
   Используем каррированную функцию с dispatch - передает actions в зависимости от ответа в reducer который понимает что с ними делать
   "const getGalleryItems = () => (dispatch) => {};"

10. Вызываем операцию в том компоненте где нужно изменять состоянии
11. Импортируем connect компонент заворачиваем в connect а сама операция будет доступна из обьекта mapDispatchToProps

12. Импортируем actions в reducer. Прописываем логику как он взаимодействует с разными action где обработка каждого экшкна это свойства обьекта, ключем является [имя экшена] а значением - результат вызова анонимной стрелочной функции.

13. Для передачи данных из глобального стейта в компонент используются селекторы. Импортируем функцию из selectors.js которая принимает store

    export const galleryItems = (store) => {
    return store.gallery;
    };

14.
