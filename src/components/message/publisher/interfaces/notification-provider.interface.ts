export default interface IMessageProvider {
  config(params: any): void;

  publish(message: any): void;
}
