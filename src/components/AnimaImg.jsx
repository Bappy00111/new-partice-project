import React from "react";

const AnimaImg = () => {
  const datas = [
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-1.cdninstagram.com/v/t51.29350-15/441385787_413933158079260_4353445316277615202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=yRPmVl99l5UQ7kNvgFVh3DE&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYAsUYGOd8YIHx8eii2PZWq4hLz8K6o-pK_kcOrR3FbFig&oe=669BB9AF",
      heartRating: 4.5,
      comment: 1,
      size: "big",
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/436877996_939400614859117_5519978415319450757_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=PTbjjtOV3aMQ7kNvgEQHzSx&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYAdncVPZEaCjIFbMmzg5czYw8lnC9ZNQEOpHARRN3mm_w&oe=669BA605",
      heartRating: 3.5,
      comment: 2,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/429508165_367558182757447_4738005747207571776_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=bm16VuEBtk4Q7kNvgHHcokO&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYDvFUiD_Z5f5x1Q8Fa_7VzW58CoW3WDm1F0ZgsZz1oYnw&oe=669B947C",
      heartRating: 5,
      comment: 3,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/424470012_7065454816835477_6409731199248814368_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=H73mlLQfdL0Q7kNvgEvyFKD&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYCp64FRjR3hKOJXWkgH5qYgledjTc5YZ0dngaaV1HD97Q&oe=669B9338",
      heartRating: 4,
      comment: 4,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/423433603_1189849721977725_8953616860820502421_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=vjHEeceATIwQ7kNvgEpyzl3&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYDR_CWaxjbdIYWTqI0UGJDz4tAZ7wsso0G611jEyqpVNQ&oe=669B9A40",
      heartRating: 4.7,
      comment: 5,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-1.cdninstagram.com/v/t51.29350-15/403903460_840933311064068_7788031931547285805_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=1PFCiKOZtj4Q7kNvgFX-ddy&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYD5GkOPaHldLZlnzBWsypwAt1HbFXCTa2oUNJHcHgrHDg&oe=669B8E80",
      heartRating: 3.8,
      comment: 6,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-2.cdninstagram.com/v/t51.29350-15/405496593_879615903874199_5334924572920357512_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=s5lSJCHGXvcQ7kNvgEoENuA&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYDbLJKnq5sVRHb8m1CPHLlYb2ZFAlRxMiaCP8EQ-EtZiw&oe=669B9D1C",
      heartRating: 4.9,
      comment: 7,
      size: "big",
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/403970720_1810635616042320_463362421316360022_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=BvOCjI9CmkEQ7kNvgF4_jxA&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYAneZrDal7PT9_quLM9tRKaRdBa6tj1g4LUgOfc2Qaveg&oe=669BA294",
      heartRating: 4.3,
      comment: 8,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/404331639_1371211340173516_1037986809072686717_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=W8CZMP7bcJkQ7kNvgFu9V72&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYCAmq9wdnPzWWg_vHrnz2DhcN0tQP_DY4Ui9gz1locX-w&oe=669BBF19",
      heartRating: 5,
      comment: 9,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/403930910_1068760851225712_1901092904036036446_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=g3cKbVNtM4cQ7kNvgFvGZRH&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYDPdlwqavijIvKSeh6rUvRB-qHInuah0k3uNeVH9MVRew&oe=669BAB60",
      heartRating: 4.1,
      comment: 10,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-1.cdninstagram.com/v/t51.29350-15/380770812_3236225396675029_3145914359263489478_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=PkbRiwKo0TQQ7kNvgF3wBTv&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYC3AJ4d35WjX_KXG_b6Mvy58dtdVCmpjT-ffp3JL4ABwQ&oe=669B8ECA",
      heartRating: 4.6,
      comment: 11,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.36329-15/359769501_524842743102401_3409775276144692862_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=jZUD5NYVnWEQ7kNvgEFUwzM&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYC9RY7OYVSVmZ15rZTEUY07DdrcfMmkrH-yD8MRr6rCpw&oe=669B9F30",
      heartRating: 3.9,
      comment: 12,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.36329-15/356891081_7175944352433105_425663536221845925_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=wghvQ5IjKZ8Q7kNvgHeSzzB&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYAY_kBeBxoOrO08JfP-O4ODra-QWu4MQp4zgCzLWPAMHA&oe=669BAD00",
      heartRating: 4.8,
      comment: 13,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-2.cdninstagram.com/v/t51.36329-15/352598199_928224695131001_6160217172536575467_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=y3RE3fX-dz4Q7kNvgE4t04U&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYCNtf2onGokDSW6JDg3UXNkYvCl1oSk0itFzz3SNfxosg&oe=669B9FAF",
      heartRating: 4.2,
      comment: 14,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/343495308_809453957188564_8456121945275531406_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=CkgDE3X9vR8Q7kNvgEKturA&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYA70fFqXm6szCbULVD2p9mKhdx9dkm3fPIG8sTNguQYeg&oe=669BC052",
      heartRating: 5,
      comment: 15,
      size: "big",
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/321084139_955078562120206_4319214472205355520_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=SoB6OzUTi-MQ7kNvgG7drRh&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYAI4RzFxn90YA22ZYz8s3IRxewZF6hyexZWMhtp41AElg&oe=669BB748",
      heartRating: 4.4,
      comment: 16,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-2.cdninstagram.com/v/t51.36329-15/315764969_136070532553664_7336372333487669836_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=t0DohYSazIMQ7kNvgE6BSro&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBjkqjLwRJGApCK3fDgMTsFo5CKYGykAKTjjbNOyKPXOQ&oe=669BB973",
      heartRating: 4.5,
      comment: 17,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-1.cdninstagram.com/v/t51.29350-15/315236048_5808169242539848_3871631485292020938_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=SrvE8_YeEjQQ7kNvgEQ6cvW&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBH9NmcrRISzRwd-8ADUKFlUNeFSJtdyY51hHa4ZVgBww&oe=669BB950",
      heartRating: 4.7,
      comment: 18,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/311595844_893406328312524_9195542118964250321_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=SbriWCXMRUEQ7kNvgFDnGvN&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBCFmFRaL_hCsNh_xcZBFchwAMb96Z9wv2WHye7bhdGtA&oe=669B9575",
      heartRating: 4.9,
      comment: 19,
    },
    {
      name: "Anima-res",
      title: "Title 20",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/311595844_893406328312524_9195542118964250321_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=SbriWCXMRUEQ7kNvgFDnGvN&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBCFmFRaL_hCsNh_xcZBFchwAMb96Z9wv2WHye7bhdGtA&oe=669B9575",
      heartRating: 4.1,
      comment: 20,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-1.cdninstagram.com/v/t51.29350-15/275538896_374625904506126_3295674576096593104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=kb9Od8HCfLcQ7kNvgFMUeDm&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYAEoM-zpCbPd8o4QpuB33vULFkZ38y57LIllxWgSMe92Q&oe=669B9757",
      heartRating: 4.3,
      comment: 21,
      size: "big",
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/269177019_645173076502848_1771067511696771064_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=dv5V5L3E_9YQ7kNvgEZUWr-&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBYIBIOo2FHj9ptlpEWy2VU7ucjoOgJz9PpbW0jIZpinQ&oe=669B9C3A",
      heartRating: 4.2,
      comment: 22,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/311189396_443042937811962_4764358567117681894_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=8rim-t1U-PYQ7kNvgH7uB1F&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYDgdG9zLU6Qd_Usvhk_qeE8Isl4pquCEQBUWhaOzXZs-Q&oe=669B9EED",
      heartRating: 3.7,
      comment: 23,
    },
    {
      name: "Anima-res",
      title: "we are very exited",
      image:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/311595844_893406328312524_9195542118964250321_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=SbriWCXMRUEQ7kNvgFDnGvN&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBCFmFRaL_hCsNh_xcZBFchwAMb96Z9wv2WHye7bhdGtA&oe=669B9575",
      heartRating: 4.6,
      comment: 24,
    },
  ];

  // console.log(data);

  return (
    <div className="grid grid-cols-4 grid-flow-dense">
      {datas.map((data) => (
        <div className="relative group overflow-hidden">
          <img
            className="h-96  w-full transition-transform duration-300 transform group-hover:scale-110"
            src={data.image}
            alt=""
          />

          <div className="hover:bg-black hover:bg-opacity-70 absolute inset-0 flex justify-center p-4">
           <div>
           <p className="text-white hidden group-hover:block text-center">
              {data.name}
            </p>
            <p className="text-white hidden group-hover:block">
              {data.title}
            </p>
           </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimaImg;
