export interface Channel {
  uriImg: string;
  channelID: string;
  channelTitle: string;
  description: string;
}

export interface Video {
  videoID: string;
  title: string;
  desciption: string;
}

export interface Account {
  name: string;
  email: string;
  urlImg: string;
  userID: string;
  id: number;
}

export interface Playlist {
  channelTitle: string;
  title: string;
  urlImg: string;
  playlistID: string;
  countVideo: number;
}
