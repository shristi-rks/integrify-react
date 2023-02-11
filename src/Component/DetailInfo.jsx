function DetailInfo ({country}) {
    return (
        <div>
            <p>{country.flag}</p>
            <p>{country.name.common}</p>
        </div>
    )
}
export default DetailInfo;