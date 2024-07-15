/* eslint-disable no-unused-vars */
import React from "react";
import CustomCard from "../common/Card";

const cardData=[
  
    {
      "id": 1,
      "image": "https://example.com/image1.jpg",
      "province": "Aceh",
      "city": "Banda Aceh",
      "attraction": "Pantai Lampuuk",
      "attraction_image": "https://example.com/attraction_image1",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 2,
      "image": "https://example.com/image2.jpg",
      "province": "Sumatera Utara",
      "city": "Medan",
      "attraction": "Danau Toba",
      "attraction_image": "https://example.com/attraction_image2",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 3,
      "image": "https://example.com/image3.jpg",
      "province": "Sumatera Barat",
      "city": "Bukittinggi",
      "attraction": "Jam Gadang",
      "attraction_image": "https://example.com/attraction_image3",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 4,
      "image": "https://example.com/image4.jpg",
      "province": "Riau",
      "city": "Tanjung Pinang",
      "attraction": "Pulau Bintan",
      "attraction_image": "https://example.com/attraction_image4",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 5,
      "image": "https://example.com/image5.jpg",
      "province": "Kepulauan Riau",
      "city": "Bintan",
      "attraction": "Lagoi Bay",
      "attraction_image": "https://example.com/attraction_image5",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 6,
      "image": "https://example.com/image6.jpg",
      "province": "Jambi",
      "city": "Jambi",
      "attraction": "Gunung Kerinci",
      "attraction_image": "https://example.com/attraction_image6",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 7,
      "image": "https://example.com/image7.jpg",
      "province": "Sumatera Selatan",
      "city": "Palembang",
      "attraction": "Pulau Kemaro",
      "attraction_image": "https://example.com/attraction_image7",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 8,
      "image": "https://example.com/image8.jpg",
      "province": "Bengkulu",
      "city": "Bengkulu",
      "attraction": "Pantai Panjang",
      "attraction_image": "https://example.com/attraction_image8",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 9,
      "image": "https://example.com/image9.jpg",
      "province": "Lampung",
      "city": "Bandar Lampung",
      "attraction": "Pantai Mutun",
      "attraction_image": "https://example.com/attraction_image9",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 10,
      "image": "https://example.com/image10.jpg",
      "province": "Bangka Belitung",
      "city": "Pangkal Pinang",
      "attraction": "Pantai Tanjung Tinggi",
      "attraction_image": "https://example.com/attraction_image10",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 11,
      "image": "https://example.com/image11.jpg",
      "province": "Kepulauan Bangka Belitung",
      "city": "Belitung",
      "attraction": "Pulau Lengkuas",
      "attraction_image": "https://example.com/attraction_image11",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 12,
      "image": "https://example.com/image12.jpg",
      "province": "Banten",
      "city": "Serang",
      "attraction": "Pantai Anyer",
      "attraction_image": "https://example.com/attraction_image12",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 13,
      "image": "https://example.com/image13.jpg",
      "province": "Jakarta",
      "city": "Jakarta Pusat",
      "attraction": "Monas",
      "attraction_image": "https://example.com/attraction_image13",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 14,
      "image": "https://example.com/image14.jpg",
      "province": "Jawa Barat",
      "city": "Bandung",
      "attraction": "Tangkuban Perahu",
      "attraction_image": "https://example.com/attraction_image14",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 15,
      "image": "https://example.com/image15.jpg",
      "province": "Jawa Tengah",
      "city": "Magelang",
      "attraction": "Candi Borobudur",
      "attraction_image": "https://example.com/attraction_image15",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 16,
      "image": "https://example.com/image16.jpg",
      "province": "DI Yogyakarta",
      "city": "Yogyakarta",
      "attraction": "Malioboro",
      "attraction_image": "https://example.com/attraction_image16",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 17,
      "image": "https://example.com/image17.jpg",
      "province": "Jawa Timur",
      "city": "Malang",
      "attraction": "Gunung Bromo",
      "attraction_image": "https://example.com/attraction_image17",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 18,
      "image": "https://example.com/image18.jpg",
      "province": "Bali",
      "city": "Denpasar",
      "attraction": "Pantai Kuta",
      "attraction_image": "https://example.com/attraction_image18",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 19,
      "image": "https://example.com/image19.jpg",
      "province": "Nusa Tenggara Barat",
      "city": "Mataram",
      "attraction": "Gili Trawangan",
      "attraction_image": "https://example.com/attraction_image19",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 20,
      "image": "https://example.com/image20.jpg",
      "province": "Nusa Tenggara Timur",
      "city": "Labuan Bajo",
      "attraction": "Pulau Komodo",
      "attraction_image": "https://example.com/attraction_image20",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 21,
      "image": "https://example.com/image21.jpg",
      "province": "Kalimantan Barat",
      "city": "Pontianak",
      "attraction": "Taman Nasional Betung Kerihun",
      "attraction_image": "https://example.com/attraction_image21",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 22,
      "image": "https://example.com/image22.jpg",
      "province": "Kalimantan Tengah",
      "city": "Palangka Raya",
      "attraction": "Taman Nasional Tanjung Puting",
      "attraction_image": "https://example.com/attraction_image22",
      "description": "loremipsumasdasdasdasdasd"
    },
  
    {
      "id": 23,
      "image": "https://example.com/image23.jpg",
      "province": "Kalimantan Selatan",
      "city": "Banjarmasin",
      "attraction": "Pasar Terapung",
      "attraction_image": "https://example.com/attraction_image23",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 24,
      "image": "https://example.com/image24.jpg",
      "province": "Kalimantan Timur",
      "city": "Berau",
      "attraction": "Pulau Derawan",
      "attraction_image": "https://example.com/attraction_image24",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 25,
      "image": "https://example.com/image25.jpg",
      "province": "Kalimantan Utara",
      "city": "Nunukan",
      "attraction": "Taman Nasional Kayan Mentarang",
      "attraction_image": "https://example.com/attraction_image25",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 26,
      "image": "https://example.com/image26.jpg",
      "province": "Sulawesi Utara",
      "city": "Manado",
      "attraction": "Bunaken",
      "attraction_image": "https://example.com/attraction_image26",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 27,
      "image": "https://example.com/image27.jpg",
      "province": "Sulawesi Tengah",
      "city": "Palu",
      "attraction": "Togean",
      "attraction_image": "https://example.com/attraction_image27",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 28,
      "image": "https://example.com/image28.jpg",
      "province": "Sulawesi Selatan",
      "city": "Makassar",
      "attraction": "Toraja",
      "attraction_image": "https://example.com/attraction_image28"
    },
    {
      "id": 29,
      "image": "https://example.com/image29.jpg",
      "province": "Sulawesi Tenggara",
      "city": "Wakatobi",
      "attraction": "Wakatobi",
      "attraction_image": "https://example.com/attraction_image29",
      "description": "loremipsumasdasdasdasdasd"
    },
    {
      "id": 30,
      "image": "https://example.com/image30.jpg",
      "province": "Sulawesi Barat",
      "city": "Mamuju",
      "attraction": "Anjungan Pantai Manakarra",
      "attraction_image": "https://example.com/attraction_image29",
      "description": "loremipsumasdasdasdasdasd"
    }
  ]
  

const SectionFirst = () => {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <CustomCard
            key={card.id}
            attraction={card.attraction}
            description={card.description}
            imageSrc={card.image}
            buttonText="Read More"
          />
        ))}
      </div>
    </section>
  );
};

export default SectionFirst;
