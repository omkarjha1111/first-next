import { top10sData } from '/data/seodata.js';

const Top10Page = ({ top10Data }) => {
  return (
    <div key={top10Data.id} className="mx-auto mt-8 text-center">
      <h1 className="text-4xl text-bold">
        Best Digital Marketing Company in {top10Data.city}
      </h1>
      <p>Slug: {top10Data.slug}</p>
      <p>{top10Data.one}</p>
      <p>{top10Data.onedesc}</p>
      <p>{top10Data.two}</p>
      <p>{top10Data.twodesc}</p>
      <p>{top10Data.three}</p>
      <p>{top10Data.threedesc}</p>
      <p>{top10Data.four}</p>
      <p>{top10Data.fourdesc}</p>
      <p>{top10Data.five}</p>
      <p>{top10Data.fivedesc}</p>
      <p>{top10Data.six}</p>
      <p>{top10Data.sixdesc}</p>
      <p>{top10Data.seven}</p>
    </div>
  );
};

//index is used when file name is [index].js
//slug is used when file name is [slug].js

export async function getStaticPaths() {
  let paths = top10sData.map((x) => {
    return { params: { slug: x.slug } };
  });
  console.log(`Number of pages created: ${paths.length}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      top10Data: top10sData.find((e) => e.slug == context.params.slug),
    },
  };
}

export default Top10Page;
