import { FileDatabase } from '../database/index';
import { File } from '../database/File';

export class FileService {
  db: FileDatabase;
  constructor() {
    FileDatabase.createDatabase();
    this.db = FileDatabase.db;
  }
  public getAllFiles () {
    return this.db.file.toArray();
  }
  public createNewFile(f: File) {
    return this.db.transaction('rw', this.db.file, async() => {
      if ((await this.db.file.where('name').equals(f.name).count()) === 0) {
      const id = await this.db.file.add({name: f.name, description: f.description});
      alert (`Added file with id ${id}`);
    }
    });
  }
  public updateFile(f: File) {
    return this.db.file.update(f.id, {name: f.name, description: f.description});
  }
}
