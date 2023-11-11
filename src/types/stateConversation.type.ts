export interface IStateConversation {
  id: {
    server: string;
    user: string;
    _serialized: string;
  };
  firstTime: boolean;
  finished: boolean;
  inService: boolean;
  clientWaiting: boolean;
  menuChoose: [number, number];
}
