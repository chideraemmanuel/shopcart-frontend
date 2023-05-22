import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const client = createClient({
  projectId: projectId,
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-02-05",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
