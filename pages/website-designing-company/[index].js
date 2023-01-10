import { citysData } from '/data/data.js';

const CityPage = ({ cityData }) => {
  return (
    <div key={cityData.id} className="mx-auto mt-8 text-center">
      <h1 className="text-4xl text-bold">{cityData.name}</h1>
      <p>Slug: {cityData.slug}</p>
    </div>
  );
};

//index is used when file name is [index].js
//slug is used when file name is [slug].js

export async function getStaticPaths() {
  let paths = citysData.map((x) => {
    return { params: { index: x.slug } };
  });
  console.log(`Number of pages created: ${paths.length}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: { cityData: citysData.find((e) => e.slug == context.params.index) },
  };
}

export default CityPage;
