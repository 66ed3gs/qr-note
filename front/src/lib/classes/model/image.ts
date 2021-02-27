export default class Image {
  private _name: string = '';
  private _url: string = '';

  constructor(name: string, url: string) {
    this._name = name;
    this._url = url;
  }

  get name(): string {
    return this._name;
  }

  get url(): string {
    return this._url;
  }

  public toObject(): any {
    return {
      name: this._name,
      url: this._url,
    };
  }
}
