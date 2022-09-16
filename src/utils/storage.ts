import { diskStorage, } from 'multer';
import { join, } from 'path';
import { v4 as uuid, } from 'uuid';
import * as mime from 'mime';

export function storageDir() {
  console.log(__dirname);
  return join(__dirname, '../../../storage');
}

export function multerStorage(dest:string) {
  return diskStorage({
    destination: (req, file, cb) => 
      cb(null, dest),
    filename: (req, file, cb) => 
      cb(null, `${uuid()}.${(mime as any)._extensions[ file.mimetype ]}`),
  });
}