import {v4 as uuidv4} from 'uuid'
import path from 'path'

export default function saveFile(image: any) {
    let fileName = uuidv4() + '.jpg'
    image.mv(path.resolve(__dirname, '..', 'static', fileName))
    return fileName
}