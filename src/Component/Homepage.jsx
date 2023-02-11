import { Pagination } from "react-bootstrap";
export function Footer() {
    return (
        <div>
            <p>Flows per page</p>
            <Pagination>
                <Pagination.Item>{"1-5"}</Pagination.Item>
            <Pagination.Prev />
            <Pagination.Next />
            </Pagination>
        </div>
    )
}
function Homepage({country}) {
    return (
        <div>
            <ul>
            <li> {country.name.common} </li>
            </ul>
        </div>
    )

}

export default Homepage;