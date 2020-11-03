import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.css']
})
export class FileSelectionComponent implements OnInit {
  selectedFile: File = null;
  imgUrl;
  fb;
  uploading = false;
  uploadValue;
  downloadURL: Observable<string>;
  inputControl = new FormControl('');
  @Input() trip;
  @Output() uploadEmitter = new EventEmitter();

  constructor(private storage: AngularFireStorage,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
      this.uploadEmitter.emit(reader.result);
    };

    this.openSnackBar('File selected!', '');
  }

  save(): void {
    if (this.selectedFile) {
      const name = this.trip.title + this.trip.datestart + 'Image';
      const file = this.selectedFile;
      const filePath = `Images/${name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`Images/${name}`, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fb = url;
              }
            });
          })
        )
        .subscribe(url => {
          if (url) {
            if (url.bytesTransferred < url.totalBytes) {
              this.uploading = true;
              this.uploadValue = 100 / url.totalBytes * url.bytesTransferred;
            } else {
              this.uploading = false;
            }
          }
        });
    }
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  reset(): void {
    this.selectedFile = null;
    this.imgUrl = null;
    this.inputControl.setValue('');
    this.inputControl.reset();
  }
}
