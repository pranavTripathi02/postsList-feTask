import { TPostDto } from "./dto";
import { TPost } from "../../types/index.ts";

// Converts and decouples response from server for UI
function dtoToPost(dto: TPostDto): TPost {
  return {
    id: dto.id,
    date: dto.date,
    title: dto.title,
    content: dto.content,
    thumbnailSmall: dto.thumbnail.small,
    thumbnailLarge: dto.thumbnail.large,
    authorName: dto.author.name,
    authorAvatar: dto.author.avatar ?? "/broken-link.png",
    authorRole: dto.author.role,
  };
}

export default dtoToPost;
