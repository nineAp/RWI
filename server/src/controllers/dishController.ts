import { Dish, PrismaClient } from '@prisma/client'
import {Request, Response} from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import saveFile from '../utils/saveFile'


interface FileRequest extends Request {
    files: any
}

const prisma = new PrismaClient()

export default class DishController {

    async get(req: Request, res: Response) {
        try {
            const dish: Dish[] = await prisma.dish.findMany({
                include: {Category: true}
            })
            return res.json(dish)
        } catch(e) {
            res.status(500)
            return res.json({message: 'Unexpected Error', code: '500'})
        }
    }

    async getById(req: Request, res: Response) {
        const {id} = req.params

        try {
            const dish: Dish | null = await prisma.dish.findUnique({
                include: {Category: true},
                where: {
                    id: Number(id)
                }
            })
            res.json(dish)
        } catch(e) {
            res.status(500)
            if(e instanceof PrismaClientKnownRequestError) {
                if(e.code === 'P2018') {
                    res.status(404)
                    return res.json({message: 'Category not found', code: '404'})
                }
                return res.json({message: 'Unexpected Error', code: '500'})
            }
        }
    }

    async getByCatId(req: Request, res: Response) {
        const {id} = req.params

        try {
            const dish: Dish[] | null = await prisma.dish.findMany({
                where: {
                    categoryId: Number(id)
                }
            })
            res.json(dish)
        } catch(e) {
            res.status(500)
            if(e instanceof PrismaClientKnownRequestError) {
                if(e.code === 'P2018') {
                    res.status(404)
                    return res.json({message: 'Category not found', code: '404'})
                }
                return res.json({message: 'Unexpected Error', code: '500'})
            }
        }
    }

    async create(req: Request, res: Response) {
        const body: Dish = req.body
        console.log(body)
        try {
            const image = (req as FileRequest).files
            console.log(image)
            let fileName: string | null;
            if(image !== null) {
                const {image} = (req as FileRequest).files
                fileName = saveFile(image)
            } else {
                fileName = 'no_photo.jpg'
            }
            let catId: number | null | undefined = null
            if(String(body.categoryId) !== '') {
                catId = Number(body.categoryId)
            }
            const dish: Dish = await prisma.dish.create({
                data: {
                    title: body.title,
                    image: fileName,
                    description: body.description,
                    weight: body.weight,
                    price: Number(body.price),
                    categoryId: catId
                }
            })
            return res.json(dish)
        } catch(e) {
            res.status(500)
            if(e instanceof PrismaClientKnownRequestError) {
                if(e.code === 'P2005') {
                    res.status(409)
                    return res.json({message: 'Не все данные введены или тип данных несоответсвует', code: '409'})
                }
                return res.json({message: 'Unexpected Error', code: '500'})
            }
        }
    }

    async change(req: Request, res: Response) {
        const {id} = req.params
        const body: Dish = req.body
        try {
            const image = (req as FileRequest).files
            let fileName: string | null = 'no_photo.jpg'
            let catId: number | null | undefined = null
            if(String(body.categoryId) !== '') {
                catId = Number(body.categoryId)
            } else {
                const previousValue: Dish | null = await prisma.dish.findUnique({
                    where: {
                        id: Number(id),
                    }
                })
                if(previousValue !== null) {
                    catId = previousValue.categoryId
                }
            }
            if(image !== null) {
                const {image} = (req as FileRequest).files
                fileName = saveFile(image)
            } else {
                const previousValue: Dish | null = await prisma.dish.findUnique({
                    where: {
                        id: Number(id),
                    }
                })
                if(previousValue !== null) {
                    fileName = previousValue.image
                }
            }
            const dish: Dish = await prisma.dish.update({
                where: {
                    id: Number(id)
                },
                data: {
                    title: body.title,
                    image: fileName,
                    description: body.description,
                    weight: body.weight,
                    price: Number(body.price),
                    categoryId: catId,
                }
            })
            return res.json(dish)
        } catch(e) {
            res.status(500)
            if(e instanceof PrismaClientKnownRequestError) {
                if(e.code === 'P2005') {
                    res.status(409)
                    return res.json({message: 'Тип данных несоответсвует', code: '409'})
                }
                return res.json({message: 'Unexpected Error', code: '500'})
            }
        }
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params
        try {
            await prisma.dish.delete({
                where: {
                    id: Number(id)  
                }
            })
            return res.json({message: 'Успешно удалено'})
        } catch(e) {
            res.status(500)
            return res.json({message: 'Unexpected Error', code: '500'})
        }
    }
}


module.exports = DishController