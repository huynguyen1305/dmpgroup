import CardNews from './CardNews/CardNews';
const News = () => {
  const cardNews = [
    {
      key: 1,
      title: 'Tin tức 1',
      content: 'Nội dung tin tức 1',
    },
    {
      key: 2,
      title: 'Tin tức 2',
      content: 'Nội dung tin tức 2',
    },
    {
      key: 3,
      title: 'Tin tức 3',
      content: 'Nội dung tin tức 3',
    },
    {
      key: 4,
      title: 'Tin tức 4',
      content: 'Nội dung tin tức 4',
    },
    {
      key: 5,
      title: 'Tin tức 5',
      content: 'Nội dung tin tức 5',
    },

    {
      key: 2,
      title: 'Tin tức 2',
      content: 'Nội dung tin tức 2',
    },
    {
      key: 3,
      title: 'Tin tức 3',
      content: 'Nội dung tin tức 3',
    },
    {
      key: 4,
      title: 'Tin tức 4',
      content: 'Nội dung tin tức 4',
    },
    {
      key: 5,
      title: 'Tin tức 5',
      content: 'Nội dung tin tức 5',
    },
  ];
  return (
    <section style={{ width: '100%', height: '100%', padding: '100px' }}>
      <div>
        <h3
          style={{
            width: '100%',
            height: '100%',

            color: 'black',
            fontSize: '3vw',
            fontWeight: '500',
            textTransform: 'capitalize',
          }}
        >
          Tin Tức
        </h3>
      </div>
      <div
        style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(3, minmax(auto, 1fr))',
          gridTemplateRows: 'repeat(2, 250px)',
          overflow: 'hidden',
        }}
      >
        {cardNews.map((item) => {
          return <CardNews key={item.key} item={item} />;
        })}
      </div>
    </section>
  );
};

export default News;
