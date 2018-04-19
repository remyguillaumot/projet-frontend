export class Town {
  id: number;
  name: string;
  postcode: string;
  icon: string;
  temperature: number;
  summary: string;
  lat: number;
  long: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}