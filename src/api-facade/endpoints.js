import urljoin from "url-join";

const url = "https://jsonplaceholder.typicode.com"

export const albumEndPoint = urljoin(
  url,
  "albums",
);

export const photoEndPoint = urljoin(
    url,
    "photos",
);