import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMarkdownEditorComponent } from './editor/editor.component';
import { LibService } from './service/lib.service';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditorToolbarComponent } from './editor/toolbar/toolbar.component';

export { MatMarkdownEditorComponent } from './editor/editor.component';
export { LibService } from './service/lib.service';
export { MatMarkdownEditorOptions, MarkedjsOption } from './lib.interface';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  exports: [MatMarkdownEditorComponent],
  declarations: [MatMarkdownEditorComponent, EditorToolbarComponent],
})
export class MatMarkdownEditorModule {
  static forRoot(): ModuleWithProviders<MatMarkdownEditorModule> {
    return {
      ngModule: MatMarkdownEditorModule,
      providers: [LibService],
    };
  }
}
