import { Category, PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import {Request, Response} from 'express'
import saveFile from '../utils/saveFile'


interface FileRequest extends Request {
    files: any
}

const prisma = new PrismaClient()


export default class CategoryController {

    async get(req: Request, res: Response) {
        try {
            const category: Category[] = await prisma.category.findMany({
                include: {dishes: true}
            })
            return res.json(category)
        } catch(e) {
            res.status(500)
            return res.json({message: 'Unexpected Error', code: '500'})
        }
    }

    async getById(req: Request, res: Response) {
        const {id} = req.params

        try {
            const category: Category | null = await prisma.category.findUnique({
                include: {dishes: true},
                where: {
                    id: Number(id)
                }
            })
            res.json(category)
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
        const body: Category = req.body
        try {
            const image = (req as FileRequest).files
            let fileName: string | null;
            if(image !== null) {
                const {image} = (req as FileRequest).files
                fileName = saveFile(image)
            } else {
                fileName = 'no_photo.jpg'
            }
            const category: Category = await prisma.category.create({
                data: {
                    title: body.title,
                    image: fileName
                }
            })
            return res.json(category)
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
        const body: Category = req.body
        try {
            const image = (req as FileRequest).files
            let fileName: string | null = 'no_photo.jpg'
            if(image !== null) {
                const {image} = (req as FileRequest).files
                fileName = saveFile(image)
            } else {
                const previousValue: Category | null = await prisma.category.findUnique({
                    where: {
                        id: Number(id),
                    }
                })
                if(previousValue !== null) {
                    fileName = previousValue.image
                }
            }
            const category: Category = await prisma.category.update({
                where: {
                    id: Number(id)
                },
                data: {
                    title: body.title,
                    image: fileName,
                }
            })
            return res.json(category)
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
            await prisma.category.delete({
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


module.exports = CategoryController