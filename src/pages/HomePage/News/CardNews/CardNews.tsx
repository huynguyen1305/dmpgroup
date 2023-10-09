const CardNews = ({ item }: { item: any }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        border: '1px solid black',
      }}
    >
      {item.title}
    </div>
  );
};

export default CardNews;
