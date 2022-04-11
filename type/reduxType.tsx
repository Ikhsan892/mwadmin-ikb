interface PayloadRedux<T extends unknown> {
  type: string;
  data: T;
}

export { type PayloadRedux };
