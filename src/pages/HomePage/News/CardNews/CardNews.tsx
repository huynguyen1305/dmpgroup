const CardNews = ({ item }: { item: any }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',

        borderRadius: '0.6rem',

        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={item.img}
          alt="image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.3) 50px, rgba(0, 0, 0, 0) 100%)',
          width: '100%',
          height: '100%',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div></div>
        <div
          style={{
            height: '100px',
            width: '100%',
            padding: '1rem',

            color: '#EFEFEF',
            display: 'flex',
            flexDirection: 'column',
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 100%)',
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: '400' }}>
            {item.createAt.toLocaleDateString('vi-VN')}
          </div>
          <h4
            style={{
              flex: 1,
            }}
            className="line-clamp-2"
          >
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
