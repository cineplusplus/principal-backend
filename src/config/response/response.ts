import { TypesResponse } from 'src/types/types';

type Error<T> = { error: T };
type Message<T> = { message: T };

export default class Response<T> {
  private estructure: Error<T> | Message<T> | null = null;
  constructor(
    private type: TypesResponse,
    private message: T,
  ) {}

  setMessage(message: T) {
    this.message = message;
  }
  private error() {
    this.estructure = {
      error: this.message,
    };
    return this.estructure;
  }

  private mess() {
    this.estructure = {
      message: this.message,
    };
    return this.estructure;
  }

  send(): Error<T> | Message<T> {
    if (this.type === 'error') {
      return this.error();
    } else {
      return this.mess();
    }
  }
}
