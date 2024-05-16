const ContentItem = ({ data }) => {
  return data.content.map((data, index) => {
    switch (data.type) {
      case "first paragraph":
        return (
          <p>
            <strong>{data.source}</strong> - {data.text}
          </p>
        );
      case "paragraph":
        return <p key={index}>{data.text}</p>;
    }
  });
};

export default ContentItem;
