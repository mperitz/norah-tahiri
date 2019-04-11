export enum Type {
  Video = 'video',
  Image = 'image',
  Text = 'text',
}

export enum TextType {
  Header = 'header',
  Body = 'body',
  ListItem = 'listItem',
}

interface Text {
  type: TextType,
  value: string,
}

export default interface Content {
  type: Type,
  videoId?: string,
  src?: string,
  paddingPercentage?: number,
  text?: Text[],
}
