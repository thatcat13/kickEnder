export class Project {
  // amtFunded: number = Math.floor(this.dollarAmt * this.percentFunded)
  constructor (
    public title: string,
    public description: string,
    public percentFunded: number,
    public dollarAmt: number,
    public image: string,
    public category: string
  ) {}
}
