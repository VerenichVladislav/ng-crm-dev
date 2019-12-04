
import { Observable } from 'rxjs';
export class News{
    totalResults:String;
    articles: Article[];
}
export class Article{
    decs : String;
    author : String
    title : String;
    url : String;
    urlToImage : String;
    publishedAt : String;
    content : String;
}