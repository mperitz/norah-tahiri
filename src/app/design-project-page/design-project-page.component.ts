import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(({ name }) => {
      const projectIndex = designProjects.findIndex(({ url }) => url === name);

      if (projectIndex > -1) {
        this.project = designProjects[projectIndex];
        this.nextProject = designProjects[(projectIndex + 1) % designProjects.length];
        this.prevProject = designProjects[projectIndex === 0 ? designProjects.length - 1 : projectIndex - 1];
        this.setUpVideoPlayers();
        this.initVideoScript();
      } else {
        this.router.navigateByUrl('not-found');
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    const iframeScript = document.getElementById(this.iframeScriptId);
    if (iframeScript) iframeScript.remove();
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
    else if (type === 'listItem') return 'text-body listitem';
    return 'text text-body';
  }

  getDesignLink(url: string) {
    return `/design/${url}`
  }

  get buttonClass(): string {
    return `visit-button${!!this.project.href ? '' : ' hidden'}`;
  }

  get nextProjectHref(): string {
    return this.getDesignLink(this.nextProject.url);
  }

  get prevProjectHref(): string {
    return this.getDesignLink(this.prevProject.url);
  }
}
