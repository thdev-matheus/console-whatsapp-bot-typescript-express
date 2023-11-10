export interface IStateConversation {
  id: {
    server: string;
    user: string;
    _serialized: string;
  };
  firstTime: boolean;
  finished: boolean;
  clientWaiting: boolean;
  menuChoose: string;
}
