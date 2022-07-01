import axios from 'axios'
import {api_url} from '../utils/consts'

export default class CategoryService {
    static async getAll(){
        const response = await axios.get(`${api_url}/category/`)
        if(response.status === 200) {
            return response
        } else {
            return 'Произошла ошибка'
        }
    }

    static async getById(id){
        const response = await axios.get(`${api_url}/category/${id}/`)
        if(response.status === 200) {
            return response
        } else {
            return 'Произошла ошибка'
        }
    }

    static async create(title, image) {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        await axios.post(`${api_url}/category/`, formData).then((res, err) => {
            if(res.status === 200) {
                return res
            } else {
                return err
            }
        })
    }

    static async put(title, image, id) {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        await axios.put(`${api_url}/category/${id}`, formData).then((res, err) => {
            if(res.status === 200) {
                return res
            } else {
                return err
            }
        })
    }

    static async delete(id) {
        await axios.delete(`${api_url}/category/${id}`).then((res, err) => {
            if(res.status === 200) {
                return 'Успешно удалено'
            } else {
                return err
            }
        })
    }
}