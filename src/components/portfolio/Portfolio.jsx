import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="mainContainer">
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => {
            return (
              <PortfolioList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                id={item.id}
                setSelected={setSelected}
              />
            );
          })}
        </ul>
        <div className="container">
          {data.map((item) => {
            return (
              <a href={item.imgUrl} target="_blanc" rel="noopener noreferrer">
                <div className="item" key={item.id}>
                  <img src={item.img} alt="" className="img" />
                  <h3>{item.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
