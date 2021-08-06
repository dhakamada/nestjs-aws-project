export default interface IProvider {
  config(params: any): void;

  publish(message: any): void;
}
