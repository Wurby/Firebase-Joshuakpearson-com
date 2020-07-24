export interface Card {
  id: number;
  page: string;
  header: { title: string; subtitle: string };
  img?: string;
  content: string;
  actions?: string;
}
