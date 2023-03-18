import { contentfulQuery } from './Query';

export async function getPosts() {
  const query = `
        query PostsQuery {
            postCollection {
                items {
                    title
                    youTubeLink
                    imagesCollection {
                        items {
                            url
                            width
                            height
                        }
                    }
                }
            }
        }
    `;

  const { data } = await contentfulQuery(query);
  return data.postCollection.items;
}
