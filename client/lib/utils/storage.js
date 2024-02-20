import { isString } from "./typeOf.js";

const {localStorage:storage} = window;//window에서 localStorage를 구조분해 할당을 통해 storage라고 재 명시


//set storage()

export function setStorage(key, value) {

    return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
        storage.setItem(key, JSON.stringify(value));
        resolve()
    } else {
        reject({ message: "key는 문자 타입이여야 합니다." })
    }

    })
}


setStorage('user', JSON.stringify({ name: 'tiger' }))




export function getStorage(key) {

    return new Promise((resolve, reject) => {
    if (typeof key === 'string') {

        resolve(JSON.parse(storage.getItem(key)))
    } else {
        reject({ message: 'Storage is not exist' })
    }

    })

}





const data = await getStorage('user')

console.log(data);

export function deleteStorage(key) {
    return new Promise((resolve, reject) => {
        !key ? storage.clear() : storage.removeItem(key);
        resolve();
    })
}





// setStorage('user',{name:'tiger'})
// .then(()=>{
//     storage.getItem('user').toUpperCase()
// })

// console.log();


// localStorage.seItem('user', JSON.stringify ({name:'heesun',age:25}) );

// console.log(localStorage.getItem('user'));