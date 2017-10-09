import Dexie from 'dexie';
import { File } from './File';

//
// Declare Database
//
export class FileDatabase extends Dexie {
  static db;
  public file: Dexie.Table<File, number>;
  static createDatabase() {
    FileDatabase.db = FileDatabase.db || new FileDatabase();
  }
  private constructor() {
    super('FileDatabase');
    this.version(1).stores({
      file: '++id,name,description'
    });
  }
}
