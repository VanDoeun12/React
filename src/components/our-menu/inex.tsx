import React from "react";
import"./index.css";
import ImageWithArticleLayout from "../layout/ImageWithArticleLayout";

interface OurMenuProps {}

const ourMenuData =[
    
    {title: "Bread Basket",
    description: "Assortment of fresh baked fruit breads and muffins 5.50"
    },
    {title: "Honey Almond Granola with Fruits",
    description: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"   
    },
    {title: "Belgian Waffle",
    description: "Vanilla flavored batter with malted flour 7.50"
    },
    {title: "Scrambled eggs",
    description: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
    },
    {title: "Blueberry Pancakes",
    description: "With syrup, butter and lots of berries 8.50" 
 }

]

const OurMenu: React.FC<OurMenuProps> = (props) => {
    const {} = props;

    return(
        <ImageWithArticleLayout image="./images/tablesetting.jpg" imageStayLeft={false} >
            <h1 className="big-title">Our Menu</h1>
            <div className="list-our-menu">

                {
                    ourMenuData.map((item, index) => {
                        return (
                        <div className="our-menu" key={index}>
                            <h3 className="menu-title">
                                {item.title}
                            </h3>
                            <p className="menu-description">
                            {item.description}
                            </p>
                        </div>
                        )
                    })
                }


                
            </div>
        </ImageWithArticleLayout>
                
)
}

export default OurMenu;