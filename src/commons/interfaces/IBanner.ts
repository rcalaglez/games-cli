export interface IBanner {
  show(title: string): Promise<void>;
}
