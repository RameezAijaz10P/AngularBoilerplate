import { Component, OnInit } from '@angular/core';
import { File } from '../../database/File';
import { FileService } from '../../services/file';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fileService: FileService;
  files: File[];
  constructor() {
    this.fileService = new FileService();
  }
  ngOnInit() {
    const temp: File[] = [{name: 'file one', description: 'this is file one'}, {name: 'file two', description: 'this is file two'}];
   this.fileService.getAllFiles().then((files) => {
     if (files.length === 0) {
       files = temp;
       this.fileService.createNewFile(temp[0]);
       this.fileService.createNewFile(temp[1]);
     }
     this.files = files;
   });
  }
  updateFile(f: File) {
    this.fileService.updateFile(f).then((updated) => {
      if (updated) {
        alert ('File update successful');
      } else {
        alert('Nothing was updated');
      }
    });
  }
  clear(idx: number) {
    this.files[idx].name = '';
    this.files[idx].description = '';
  }
}
