import {S3Client, PutObjectCommand} from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import mime from 'mime-types'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const s3 = new S3Client({
  endpoint: 'https://hb.ru-msk.vkcloud-storage.ru',
  credentials: {
    secretAccessKey: process.env.S3_SECRET,
    accessKeyId: process.env.S3_ACCESS_KEY_ID
  },
  s3ForcePathStyle: true,
  region: 'ru-msk', // или ru-spb — смотри в панели VK Cloud
})

// Пример загрузки файла
const uploadFile = async () => {
	const file_path = path.join('C:/Users/vladv/Desktop/testS3', 'cat_admin_course.png')
  const file_type = mime.lookup(file_path)
  const fileContent = fs.createReadStream(file_path)


  const upload = new Upload({
    client: s3,
    params: {
      Bucket: 'blindtyping',
      Key: 'course-images/cat_admin_course.png',
      Body: fileContent,
      ContentType: file_type,
    }
  })
 

  try {
    const result = await upload.done()
    console.log('Файл загружен:', result.Location)
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
}

uploadFile()

