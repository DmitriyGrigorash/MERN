import axios from 'axios';
import { FETCH_USER, FETCH_USER_ERROR } from './types';

/* redux-thunk middleware using. Нам не нужен вызов метода стора dispatch до тех пор, пока наш axios request
    * не вернет ответ от сервера, а только потом мы вызываем method dispatch! Так происходит, когда в action мы
    * возвращаем не объект с типом экшена и данными, а функцию. И вот в неё автоматически передается аргументом метод
    * dispatch. Это благодаря использованию applyMiddleware при создании стора и инициализации приложения! */

export const fetchUser = () => async (dispatch) => {
    await axios.get('/api/current_user')
        .then(res => dispatch(
            {
                type: FETCH_USER,
                payload: !res.data || res.data === '' ? false : res
            }
        ),rej => dispatch({type: FETCH_USER_ERROR, payload: rej}))
};
