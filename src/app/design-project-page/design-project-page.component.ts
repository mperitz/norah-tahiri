import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Project from 'src/data-structures/Project';
import designProjects from 'src/data/design-projects';

@Component({
  selector: 'design-project-page',
  templateUrl: './design-project-page.component.html',
  styleUrls: [
    './styles/css/design-project-page.header.component.css',
    './styles/media-queries/design-project-page.header-mq.component.css',
    './styles/css/design-project-page.team-info.component.css',
    './styles/media-queries/design-project-page.team-info-mq.component.css',
    './styles/css/design-project-page.carousel.component.css',
    './styles/css/design-project-page.content.component.css',
    './styles/media-queries/design-project-page.content-mq.component.css',
    './styles/css/design-project-page.footer.component.css',
    './styles/media-queries/design-project-page.footer-mq.component.css',
  ]
})
export class DesignProjectPageComponent implements OnInit {
  public project: Project;
  public nextProject: Project;
  public prevProject: Project;
  public videoPlayerInfo: any[] = [];
  public iframeScriptId: string = 'youtube-iframe-api';

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(({ id }) => {
      designProjects.forEach((project, index) => {
        if (project.id === +id) {
          this.project = project;
          this.nextProject = designProjects[(index + 1) % designProjects.length];
          this.prevProject = designProjects[index - 1 === -1 ? designProjects.length - 1 : index -1];
        }
      });
      this.setUpVideoPlayers();
      this.initVideoScript();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    document.getElementById(this.iframeScriptId).remove();
  }

  initVideoScript() {
    const tag: any = document.createElement('script');
    tag.id = this.iframeScriptId;
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag: any = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  setUpVideoPlayers() {
    window['onYouTubeIframeAPIReady'] = () => {
      this.createPlayers();
    }
  }

  addVideo = (videoInfo: object) => {
    this.videoPlayerInfo.push(videoInfo);
  }

  createPlayers() {
    this.videoPlayerInfo.forEach((info) => {
      this.createPlayer(info);
    });
  }

  createPlayer(videoInfo: any) {
    return new window['YT'].Player(`player-${videoInfo.videoId}`, videoInfo);
  }

  getImageUrl(src): string {
    return `url(${src})`;
  }

  getPaddingPercent(percent: number): string {
    return `${percent}%`;
  }

  getTextClass(type: string): string {
    if (type === 'header') return 'text text-header';
    else if (type === 'listItem') return 'text-body';
    return 'text text-body';
  }

  getDesignLink(id: number) {
    return `/design/${id}`
  }

  get nextProjectHref() {
    return this.getDesignLink(this.nextProject.id);
  }

  get prevProjectHref() {
    return this.getDesignLink(this.prevProject.id);
  }
}
