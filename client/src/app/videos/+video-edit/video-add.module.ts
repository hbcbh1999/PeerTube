import { NgModule } from '@angular/core'
import { ProgressBarModule } from 'primeng/primeng'
import { SharedModule } from '../../shared'
import { VideoEditModule } from './shared/video-edit.module'
import { VideoAddRoutingModule } from './video-add-routing.module'
import { VideoAddComponent } from './video-add.component'
import { CanDeactivateGuard } from '../../shared/guards/can-deactivate-guard.service'

@NgModule({
  imports: [
    VideoAddRoutingModule,
    VideoEditModule,
    SharedModule,
    ProgressBarModule
  ],
  declarations: [
    VideoAddComponent
  ],
  exports: [
    VideoAddComponent
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class VideoAddModule { }
