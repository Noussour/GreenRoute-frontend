declare module "openrouteservice-js" {
  export default class Openrouteservice {
    constructor(options: { api_key: string });
    directions(options: {
      coordinates: [number, number][];
      profile: string;
      format: string;
    }): Promise<any>;
  }
}
