import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../service/app.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [HttpClientModule, MatTableModule, MatIconModule, MatDialogModule, DeleteConfirmComponent, EditFormComponent],
  providers: [AppService],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  notesList: any;
 

  constructor( private service: AppService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.service.getNotes().subscribe((res:any)=>{
      this.notesList = res;
    })
  }

  edit(row:any){
    const editModal = this.dialog.open(EditFormComponent, {
      height: '500px',
      width: '650px',
    });
    editModal.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(row:any){
      const dialogRef = this.dialog.open(DeleteConfirmComponent, {
        height: '180px',
        width: '250px',
      });
      dialogRef.afterClosed().subscribe((result:any) => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
