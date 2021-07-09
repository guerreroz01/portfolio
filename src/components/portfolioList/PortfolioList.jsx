import "./portfolioList.scss"

export default function PortfolioList({ title, active, setSelected, id }) {
    return (
        <li className={active ? "portfoLioList active" : "portfoLioList"}
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
