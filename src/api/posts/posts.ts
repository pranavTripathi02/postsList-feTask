import { TPostDto } from "./dto";
import { TPost } from "../../types/index.ts";
import dtoToPost from "./transform.ts";
import apiClient from "../client";

async function getPosts(): Promise<TPost[]> {
  try {
    const { data } = await apiClient.get<TPostDto[]>("/posts");
    return data.map((postDto) => dtoToPost(postDto));
  } catch (err) {
    console.error(err);
    throw new Error("Cannot fetch posts.");
  }
}

export default getPosts;
