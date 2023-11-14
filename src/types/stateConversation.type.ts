export interface IStateConversation {
  id: IChatId;
  firstTime: boolean;
  finished: boolean;
  inService: boolean;
  menuChoose: [number, number];
}

export interface IChatId {
  server: string;
  user: string;
  _serialized: string;
}
