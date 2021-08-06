export default interface INotificationProvider {
  config(params: any): void;

  publish(message: any): void;
}
