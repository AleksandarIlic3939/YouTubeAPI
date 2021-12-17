export class Video {
    title: string;
    description: string;
    link: string;
    duration: number;

    constructor(title: string, description: string, link: string, duration: number) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.duration = duration;
    }
}