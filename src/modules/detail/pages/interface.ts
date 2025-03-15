export interface IData {
    title: string;
    author: {
      profilePicture: string;
      name: string;
      createdAt: string;
    };
    thumbnail_url: string;
    content: string;
  }
  
 
export interface IDetails {
    data: IData | null;
    isLoading: boolean;
    isError: boolean | null;
  }