export class Post {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: string
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdAt = createdAt;
  }
}
