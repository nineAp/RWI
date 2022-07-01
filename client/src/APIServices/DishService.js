import axios from 'axios'
import {api_url} from '../utils/consts'

export default class DishService {
    static async getAll(){
        const response = await axios.get(`${api_url}/dish/`)
        if(response.status === 200) {
            return response
        } else {
            return 'Произошла ошибка'
        }
    }

    static async getById(id){
        const response = await axios.get(`${api_url}/dish/${id}/`)
        if(response.status === 200) {
            return response
        } else {
            return 'Произошла ошибка'
        }
    }

    static async getByCategoryId(categoryId){
        const response = await axios.get(`${api_url}/dish/catDishes/${categoryId}`)
        if(response.status === 200) {
            return response
        } else {
            return 'Произошла ошибка'
        }
    }

    static async create(title, description, image, weight, price, categoryId) {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        formData.append('description', description)
        formData.append('weight', weight)
        formData.append('price', price)
        formData.append('categoryId', categoryId)
        await axios.post(`${api_url}/dish/`, formData).then((res, err) => {
            if(res.status === 200) {
                return res
            } else {
                return err
            }
        })
    }

    static async put(title, description, image, weight, price, categoryId, id) {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        formData.append('description', description)
        formData.append('weight', weight)
        formData.append('price', price)
        formData.append('categoryId', categoryId)
        await axios.put(`${api_url}/dish/${id}`, formData).then((res, err) => {
            if(res.status === 200) {
                return res
            } else {
                return err
            }
        })
    }

    static async delete(id) {
        await axios.delete(`${api_url}/dish/${id}`).then((res, err) => {
            if(res.status === 200) {
                return 'Успешно удалено'
            } else {
                return err
            }
        })
    }
}