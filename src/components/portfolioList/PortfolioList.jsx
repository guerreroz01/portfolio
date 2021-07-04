import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, id}) {
    return (
        <li className={ active ? "portfolioList active" : "portFolioList"}
        onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}
