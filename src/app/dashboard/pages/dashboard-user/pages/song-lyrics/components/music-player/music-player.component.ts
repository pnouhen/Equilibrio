import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss',
})
export class MusicPlayerComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  @Input() audioPath!: string | undefined;

  isLecture: boolean = false;
  imgSrc: string = '/assets/icons/play.svg';
  imgAlt: string = 'Lecture';

  currentTime: number = 0;
  duration: number = 0;
  isDurationValid: boolean = false;

  togglePlayPause() {
    if (!this.isLecture) {
      this.imgSrc = '/assets/icons/pause.svg';
      this.imgAlt = 'Pause';
      this.audioPlayer.nativeElement.play();
      this.isLecture = true;
    } else {
      this.imgSrc = '/assets/icons/play.svg';
      this.imgAlt = 'Lecture';
      this.audioPlayer.nativeElement.pause();
      this.isLecture = false;
    }
  }

  updateTime() {
    this.currentTime = this.audioPlayer.nativeElement.currentTime;
  }

  setDuration() {
    this.duration = this.audioPlayer.nativeElement.duration;
    this.isDurationValid = true;
  }

  seek(event: any) {
    const newTime = event.target.value;
    this.audioPlayer.nativeElement.currentTime = newTime;
    this.currentTime = newTime;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
