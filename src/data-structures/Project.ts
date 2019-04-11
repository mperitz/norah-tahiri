import Content from './Content';

export default interface Project {
  id: number,
  src: string,
  name: string,
  color: string,
  isDefault: boolean,
  mainDescription: string,
  client: string,
  team: string[],
  role: string,
  content?: Content[],
}
