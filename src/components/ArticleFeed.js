import React, { useState } from "react";
import client from "../apollo";
import gql from "graphql-tag";

import Article from "./Article";

const query = gql`
  query {
    articles {
      title
      source {
        name
      }
      urlToImage
      url
    }
  }
`;

const ArticleFeed = () => {
  const [data, setData] = useState([]);

  client
    .query({ query })
    .then(response => setData(response.data.articles))
    .catch(error => console.log(error));

  return (
    <div className="feed">
      {data.map((article, index) => (
        <Article
          isSmall={
            (index + 1) % 5 === 0 ||
            (index + 2) % 5 === 0 ||
            (index + 3) % 5 === 0
          }
          data={article}
          key={index}
        />
      ))}
    </div>
  );
};

export default ArticleFeed;
